import {
  ForgetPW,
  FormContainer,
  FormContentVertical,
  FormLayout,
  LoginCTA,
  LoginFormInput,
  LogoTxt,
  PageLayout,
  Txt20,
  Txt24Bold,
  TxtCTA,
} from "../../common/common";

function Login() {
  return (
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      <FormContainer>
        <Txt24Bold>로그인</Txt24Bold>
        <FormLayout mt="20px" mb="20px">
          <FormContentVertical>
            <Txt20>아이디</Txt20>
            <LoginFormInput type="text" />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>비밀번호</Txt20>
            <LoginFormInput type="password" />
          </FormContentVertical>
        </FormLayout>
        <LoginCTA><Txt24Bold>로그인</Txt24Bold></LoginCTA>
        <TxtCTA><ForgetPW>비밀번호 찾기</ForgetPW></TxtCTA>
      </FormContainer>
    </PageLayout>
  );
}

export default Login;
