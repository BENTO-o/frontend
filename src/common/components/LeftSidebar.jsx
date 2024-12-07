import React, { useState } from "react";
import {
  CustomIcon,
  DirectoryContainer,
  DirectoryItem,
  DirectoryList,
  InnerLeftMenu,
  LeftMenuContainer,
  LeftMenuItem,
  LogoTxt,
  Txt16,
  Txt16Bold,
  LeftMenu,
  AddButton,
  FlexContainer,
} from "../common";
import DatePicker from "react-datepicker";
import Icon_Home from "../../assets/Home.svg";
import Icon_Directory from "../../assets/Directory.svg";
import Icon_VerticalMore from "../../assets/VerticalMore.svg";
import Icon_Trash from "../../assets/Trash.svg";
import "react-datepicker/dist/react-datepicker.css";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createFolder, getFolders } from "../utils";
import { useNavigate } from "react-router-dom";

export const LeftSidebar = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const handleNavigateToHome = () => {
    navigate(`/`);
  };


  const [selectedDate, setSelectedDate] = useState(null);

  // const [selectedCategory, setSelectedCategory] = useState("");

  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => await getFolders({}),
    onSuccess: () => {
      console.log("success");
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });

  const onCreateFolder = useMutation({
    mutationFn: createFolder,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["folders"]);
    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onClickCreateFolder = async () => {
    onCreateFolder.mutate("고구마깡은 감자도리리");
  };

  return (
    <LeftMenuContainer>
      <LeftMenu>
        {/* 추후에 Logo 컴포넌트로 분리 */}
        <LogoTxt onClick={handleNavigateToHome}>BENTO</LogoTxt>
        <InnerLeftMenu>
          <LeftMenuItem>
            <FlexContainer>
              <CustomIcon src={Icon_Home} />
              <Txt16Bold>홈</Txt16Bold>
            </FlexContainer>
            <AddButton onClick={onClickCreateFolder}>+</AddButton>
          </LeftMenuItem>
          <DirectoryList>
            {folders?.map((folder, index) => (
              <DirectoryContainer key={index}>
                <DirectoryItem>
                  <CustomIcon src={Icon_Directory} />
                  <Txt16>{folder?.folderName}</Txt16>
                </DirectoryItem>
                <CustomIcon src={Icon_VerticalMore} />
              </DirectoryContainer>
            ))}
          </DirectoryList>
          <LeftMenuItem>
            <FlexContainer>
              <CustomIcon src={Icon_Trash} />
              <Txt16Bold>휴지통</Txt16Bold>
            </FlexContainer>
          </LeftMenuItem>
        </InnerLeftMenu>

        <InnerLeftMenu height="40vh" borderTop="1px solid #eeeeee">
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            inline
            isClearable
            dateFormat="yyyy/MM/dd"
          />
          <LeftMenuItem>
            <CustomIcon src={""} />
            <Txt16Bold>유저네임</Txt16Bold>
          </LeftMenuItem>
        </InnerLeftMenu>
      </LeftMenu>
    </LeftMenuContainer>
  );
};
