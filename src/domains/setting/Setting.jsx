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
  DeleteButton,
  LogoutBtn,
} from "../../common/common";
import { RadioButton } from "../../common/components/RadioButton";
import { ProgressBar } from "../../common/components/ProgressBar";
import { Tag } from "../../common/components/Tag";
import { UserInfo } from "./components/UserInfo";
import { ServiceInfo } from "./components/ServiceInfo";
import { UsedServiceInfo } from "./components/UsedServiceInfo";
import { LeftSidebar } from "../../common/components/LeftSidebar";
import TopBar from "../../common/components/TopBar";
import { useMutation } from "@tanstack/react-query";
import { logout } from "../login/services";
import { useNavigate } from "react-router-dom";

export const Setting = () => {
  const navigate = useNavigate();

  const onLogout = useMutation({
    mutationFn: logout,
    onSuccess: (data) => {
      sessionStorage.clear();
      navigate("/login");
      window.location.reload();
    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onClickLogoutBtn = async () => {
    confirm("로그아웃 하시겠습니까?") &&
      onLogout.mutate({ refreshToken: sessionStorage.getItem("refreshToken") });
  };

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
        <FlexContainer
          width="80%"
          flexDirection="column"
          alignItems="flex-start"
          padding
        >
          <LogoutBtn onClick={onClickLogoutBtn}>로그아웃</LogoutBtn>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};

export default Setting;
