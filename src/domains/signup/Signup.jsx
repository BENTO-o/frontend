import {
  ForgetPW,
  FormCheckbox,
  FormContainer,
  FormContentLeft,
  FormContentVertical,
  FormLayout,
  LoginCTA,
  LoginFormInput,
  LogoTxt,
  PageLayout,
  Txt16,
  Txt20,
  Txt24Bold,
  TxtBtn,
  TxtCTA,
} from "../../common/common";

function Signup() {
  return (
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      <FormContainer>
        <Txt24Bold>회원가입</Txt24Bold>
        <FormLayout mt="20px" mb="20px">
          <FormContentVertical>
            <Txt20>이메일</Txt20>
            <LoginFormInput type="text" />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>이름</Txt20>
            <LoginFormInput type="text" />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>닉네임</Txt20>
            <LoginFormInput type="text" />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>비밀번호</Txt20>
            <LoginFormInput type="password" />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>비밀번호 확인</Txt20>
            <LoginFormInput type="password" />
          </FormContentVertical>
          <FormContentLeft>
          <FormCheckbox type="checkbox" />
          <Txt16>(필수)</Txt16>
          <TxtBtn>이용약관</TxtBtn>
          <Txt16>에 동의합니다</Txt16>
        </FormContentLeft>
        <FormContentLeft>
          <FormCheckbox type="checkbox" />
          <Txt16>(필수)</Txt16>
          <TxtBtn>개인정보 수집 이용</TxtBtn>
          <Txt16>에 동의합니다</Txt16>
        </FormContentLeft>
        </FormLayout>

        <LoginCTA>
          <Txt24Bold>회원가입</Txt24Bold>
        </LoginCTA>
      </FormContainer>
    </PageLayout>
  );
}

export default Signup;
