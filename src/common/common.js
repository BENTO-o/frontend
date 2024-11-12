import styled from "@emotion/styled";

export const TxtDefault = styled.span`
  color: ${(props) => props.padding || "#999999"};
  font-size: 0.75rem; /* 12px */
  line-height: 1;
`;

export const Txt12 = styled.span`
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
`;
export const Txt12Gray = styled.span`
  font-size: 0.75rem; /* 12px */
  line-height: 1rem; /* 16px */
  color: #999999;
`;
export const Txt14 = styled.span`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
`;
export const Txt14Gray = styled.span`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  color: #999999;
`;
export const Txt14Bold = styled.span`
  font-size: 0.875rem; /* 14px */
  line-height: 1.25rem; /* 20px */
  font-weight: 500;
`;
export const Txt16 = styled.span`
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
`;
export const Txt16Bold = styled.span`
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
  font-size: 16px;
`;
export const Txt18 = styled.span`
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
`;
export const Txt18Bold = styled.span`
  font-weight: 500;
  font-size: 1.125rem; /* 18px */
  line-height: 1.75rem; /* 28px */
`;
export const Txt20 = styled.span`
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
`;
export const Txt20Bold = styled.span`
  font-weight: 500;
  font-size: 1.25rem; /* 20px */
  line-height: 1.75rem; /* 28px */
`;
export const Txt24 = styled.span`
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
`;
export const Txt24Bold = styled.span`
  font-weight: 500;
  font-size: 1.5rem; /* 24px */
  line-height: 2rem; /* 32px */
`;

export const LogoTxt = styled(TxtDefault)`
  font-size: 3rem;
  line-height: 5rem;
  font-weight: 700;
  color: #2563eb;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  max-width: ${(props) => props.maxWidth || ""};
  max-height: ${(props) => props.maxHeight || ""};
  min-width: ${(props) => props.minWidth || ""};
  min-height: ${(props) => props.minHeight || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
`;

export const FlexCenterContainer = styled(FlexContainer)`
  justify-content: center;
  flex-direction: column;
`;

export const PageLayout = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const FormLayout = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-top: ${(props) => props.mt || ""};
  margin-bottom: ${(props) => props.mb || ""};
`;

export const FormContainer = styled(FlexContainer)`
  align-items: flex-start;
  background-color: #f0f0f0;
  border-radius: 38px;
  padding: 40px;
  flex-direction: column;
`;

export const MainBody = styled(FlexContainer)`
  align-items: flex-start;
  border-bottom: 1px solid #eeeeee;
`;

export const MainBodyInnerLeft = styled(FlexContainer)`
  padding: 0px;
  min-height: 500px;
  align-items: flex-start;
  flex-direction: column;
  justify-content: flex-start;
  border-right: 1px solid #eeeeee;
`;

export const MainBodyInnerRight = styled(FlexContainer)`
  padding: 0px;
  width: 310px;
  min-width: 310px;
  min-height: 500px;
  height: 100%;
  align-items: flex-start;
  justify-content: flex-start;

  flex-direction: column;
`;

export const MainBodyCell = styled(FlexContainer)`
  padding: 30px;
  width: 100%;
  border-bottom: 1px solid #eeeeee;
  align-items: flex-start;
  flex-direction: column;
`;

export const MainBodyFormContent = styled(FlexContainer)`
  flex-direction: row;
  width: 100%;
  justify-content: flex-start;
`;

export const LoginFormInput = styled.input`
  width: 100%;
  min-width: 456px;
  height: 60px;
  border: 1px solid #eeeeee;
  border-radius: 10px;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const FormContentVertical = styled(FlexContainer)`
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
`;

export const FormContentLeft = styled(FlexContainer)`
  width: 200px;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FormContentRight = styled(FlexContainer)`
  align-items: flex-end;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
`;

export const LineEEE = styled.div`
  height: 1px;
  background-color: #eeeeee;
  width: 100%;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const CarouselImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 20px;
`;

export const LoginBtn = styled.button`
  width: 200px;
  height: 70px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 20px;
`;

export const SignupBtn = styled(LoginBtn)`
  background-color: #f7f7f7;
  color: #404040;
`;

export const LoginCTA = styled.button`
  width: 100%;
  height: 60px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 30px;
`;

export const TxtCTA = styled(FlexContainer)`
  width: 100%;
  algin-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
`;

export const ForgetPW = styled.a`
  color: #2563eb;
  font-size: 20px;
  text-decoration: underline;
`;
