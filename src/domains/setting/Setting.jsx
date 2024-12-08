import React, { useState } from "react";
import {
  FlexContainer,
  FormGroup,
  Txt16Bold,
  Txt18Bold,
  Input,
  ControlButtonsContainer,
  TagContainer,
  FormTitleContainer,
  LoginBtn,
  Txt20Bold,
  SignupBtn,
  RollbackBtn,
  SaveBtn,
  Txt24Bold,
} from "../../common/common";
import { RadioButton } from "../../common/components/RadioButton";
import { ProgressBar } from "../../common/components/ProgressBar";
import { Tag } from "../../common/components/Tag";
import { UserInfo } from "./components/UserInfo";
import { ServiceInfo } from "./components/ServiceInfo";
import { UsedServiceInfo } from "./components/UsedServiceInfo";
import { LeftSidebar } from "../../common/components/LeftSidebar";
import TopBar from "../../common/components/TopBar";

export const Setting = () => {
  return (
    <FlexContainer width="100vw" height="100vh">
      {/* Left 메뉴 컴포넌트로 분리 */}
      <LeftSidebar />

      <FlexContainer
        flexDirection="column"
        width="100%"
        height="100vh"
        margin="2rem"
      >
        <TopBar />

        <FlexContainer
          justifyContent="space-between"
          width="80%"
          height="90%"
          margin="50px 0 0 0"
        >
          <Txt24Bold>서비스 설정</Txt24Bold>
          {/* 버튼 */}
          <FlexContainer justifyContent="flex-end">
            <RollbackBtn>
              <Txt20Bold>되돌리기</Txt20Bold>
            </RollbackBtn>
            <SaveBtn>
              <Txt20Bold>저장하기</Txt20Bold>
            </SaveBtn>
          </FlexContainer>
        </FlexContainer>

        {/* 사용자 정보 */}
        <UserInfo />

        {/* 서비스 사용 정보 */}
        <ServiceInfo />

        {/* 이용 현황 */}
        <UsedServiceInfo />
      </FlexContainer>
    </FlexContainer>
  );
};

export default Setting;
