import React from "react";
import {
  CustomIcon,
  TopMenu,
  TopMenuContainer,
  TopMenuItem,
  Txt16Bold,
} from "../common";
import Icon_Mic from "../../assets/Mic.svg";
import Icon_FileCreate from "../../assets/FileCreate.svg";
import { Searchbar } from "./Searchbar";

export const TopBar = () => {
  return (
    <TopMenuContainer>
      <TopMenu>
        <TopMenuItem>
          <CustomIcon src={Icon_Mic} />
          <Txt16Bold>음성 녹음하기</Txt16Bold>
        </TopMenuItem>
        <TopMenuItem>
          <CustomIcon src={Icon_FileCreate} />
          <Txt16Bold>파일 첨부하기</Txt16Bold>
        </TopMenuItem>
      </TopMenu>
      <Searchbar />
    </TopMenuContainer>
  );
};
