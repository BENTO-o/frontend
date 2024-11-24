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
} from "../common";
import DatePicker from "react-datepicker";
import Icon_Home from "../../assets/Home.svg";
import Icon_Directory from "../../assets/Directory.svg";
import Icon_VerticalMore from "../../assets/VerticalMore.svg";
import Icon_Trash from "../../assets/Trash.svg";
import "react-datepicker/dist/react-datepicker.css";

export const LeftSidebar = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <LeftMenuContainer>
      <LeftMenu>
        {/* 추후에 Logo 컴포넌트로 분리 */}
        <LogoTxt>BENTO</LogoTxt>
        <InnerLeftMenu>
          <LeftMenuItem>
            <CustomIcon src={Icon_Home} />
            <Txt16Bold>홈</Txt16Bold>
          </LeftMenuItem>
          <DirectoryList>
            <DirectoryContainer>
              <DirectoryItem>
                <CustomIcon src={Icon_Directory} />
                <Txt16>딥러닝</Txt16>
              </DirectoryItem>
              <CustomIcon src={Icon_VerticalMore} />
            </DirectoryContainer>
            <DirectoryContainer>
              <DirectoryItem>
                <CustomIcon src={Icon_Directory} />
                <Txt16>전공종합설계</Txt16>
              </DirectoryItem>
              <CustomIcon src={Icon_VerticalMore} />
            </DirectoryContainer>
            <DirectoryContainer>
              <DirectoryItem>
                <CustomIcon src={Icon_Directory} />
                <Txt16>컴퓨터공학특강</Txt16>
              </DirectoryItem>
              <CustomIcon src={Icon_VerticalMore} />
            </DirectoryContainer>
            {/* {directoryList &&
            directoryList.map((directory) => (
              <DirectoryContainer key={note.id}>
                <DirectoryItem>
                  <CustomIcon src={Icon_Directory} />
                  <Txt24Bold>{directory.title}</Txt24Bold>
                </DirectoryItem>
                <CustomIcon src={Icon_VerticalMore} />
              </DirectoryContainer>
            ))} */}
          </DirectoryList>
          <LeftMenuItem>
            <CustomIcon src={Icon_Trash} />
            <Txt16Bold>휴지통</Txt16Bold>
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
