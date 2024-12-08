import React from "react";
import {
  AddButton,
  ControlButtonsContainer,
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Input,
  Txt16Bold,
  Txt20Bold,
} from "../../../common/common";
import { ProgressBar } from "../../../common/components/ProgressBar";

export const UsedServiceInfo = () => {
  return (
    <FlexContainer
      width="80%"
      flexDirection="column"
      alignItems="flex-start"
      padding
    >
      <FormTitleContainer>
        <Txt20Bold>이용 현황</Txt20Bold>
      </FormTitleContainer>
      <FlexContainer flexDirection="column" alignItems="flex-start">
        <FormTitleContainer>
          <Txt16Bold>구독 플랜</Txt16Bold>
        </FormTitleContainer>
        <FlexContainer alignItems="center">
          <Input value="Basic 플랜 (만료일: 24년 12월 16일)" readOnly />
          {/* <ControlButtonsContainer>변경</ControlButtonsContainer> */}
          <AddButton>변경</AddButton>
        </FlexContainer>
        <FormTitleContainer>
          <Txt16Bold>AI 요약</Txt16Bold>
        </FormTitleContainer>
        <Input value="14회 남음 / 15회" readOnly />
        <FlexContainer>
          <ProgressBar percentage={(250 / 300) * 100} />
          <Txt16Bold>사용 시간 250분 / 300분</Txt16Bold>
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
