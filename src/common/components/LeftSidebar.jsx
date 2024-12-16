import React, { useEffect } from "react";
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
  LeftSideInput,
} from "../common";
import DatePicker from "react-datepicker";
import Icon_Home from "../../assets/Home.svg";
import Icon_Directory from "../../assets/Directory.svg";
import Icon_VerticalMore from "../../assets/VerticalMore.svg";
import Icon_Trash from "../../assets/Trash.svg";
import Icon_DefaultImg from "../../assets/DefaultImg.svg";
import "react-datepicker/dist/react-datepicker.css";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { createFolder, getFolders } from "../utils";
import { useNavigate } from "react-router-dom";
import { useDateStore } from "../../stores/useDate";
import { useFolderStore } from "../../stores/useFolder";
import { useUserStore } from "../../stores/useUser";

export const LeftSidebar = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { startDate, endDate, setStartDate, setEndDate, clearDates } =
    useDateStore();
  const { user, setUser } = useUserStore(); // zustand 훅 사용하여 form 상태 가져오기
  const { folderId, setFolderId, clearFolder } = useFolderStore();
  const [folderName, setFolderName] = React.useState("");

  const handleNavigateToHome = () => {
    navigate(`/`);
  };

  const handleNavigateToSetting = () => {
    navigate(`/setting`);
  };

  const handleFolderInputChange = (e) => {
    setFolderName(e.target.value);
  };

  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => await getFolders({}),
    onSuccess: () => console.log("Folders fetched successfully."),
    onError: (e) => console.error("Error fetching folders", e),
    refetchOnMount: "always",
  });

  const onCreateFolder = useMutation({
    mutationFn: createFolder,
    onSuccess: (data) => {
      console.log(data);
      queryClient.invalidateQueries(["folders"]);
    },
    onError: (error) => console.error("Error creating folder", error),
  });

  const onClickCreateFolder = () => {
    onCreateFolder.mutate(folderName);
    setFolderName(""); // 입력값 초기화
  };

  useEffect(() => {
    console.log("Folders updated:", folderId);
  }, [folderId]);

  return (
    <LeftMenuContainer>
      <LeftMenu>
        <LogoTxt onClick={handleNavigateToHome}>BENTO</LogoTxt>
        <InnerLeftMenu>
          <LeftMenuItem>
            <FlexContainer>
              <CustomIcon src={Icon_Home} />
              <Txt16Bold>홈</Txt16Bold>
            </FlexContainer>
          </LeftMenuItem>
          <div style={{ height: "10px" }} />
          <LeftMenuItem>
            <LeftSideInput
              placeholder="폴더명을 입력하세요"
              value={folderName}
              onChange={handleFolderInputChange}
            />
            <AddButton onClick={onClickCreateFolder}>+</AddButton>
          </LeftMenuItem>
          <DirectoryList>
            {folders?.map((folder) => (
              <DirectoryContainer
                key={folder.forderId}
                isCurrent={folderId === folder.folderId}
              >
                <DirectoryItem
                  onClick={() => {
                    folderId === folder.folderId
                      ? clearFolder()
                      : setFolderId(folder.folderId);
                  }}
                >
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
            selectsRange
            startDate={startDate}
            endDate={endDate}
            onChange={([start, end]) => {
              setStartDate(start);
              setEndDate(end);
            }}
            isClearable
            dateFormat="yyyy/MM/dd"
            inline
            style={{ marginBottom: "20px" }}
          />
          <LeftMenuItem onClick={handleNavigateToSetting}>
            <CustomIcon src={Icon_DefaultImg} />
            <Txt16Bold>{user?.username}</Txt16Bold>
          </LeftMenuItem>
        </InnerLeftMenu>
      </LeftMenu>
    </LeftMenuContainer>
  );
};
