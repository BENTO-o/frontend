import { useState } from "react";
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
import { login } from "./services";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const onLogin = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      sessionStorage.setItem('token', data.accessToken);
      sessionStorage.setItem('refreshToken', data.refreshToken);
      console.log(data);
      navigate('/');
      window.location.reload();
    },
    onError: (error) => {
      console.log('에러 발생! 아래 메시지를 확인해주세요.', error);
    },
  });

  const onClickLoginBtn = async () => {
    if (!formData.email || !formData.password) {
      alert('모든 항목을 입력해주세요.');
      return;
    } else {
      onLogin.mutate({ email: formData.email, password: formData.password });
    }
  };

  return (
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      <FormContainer>
        <Txt24Bold>로그인</Txt24Bold>
        <FormLayout mt="20px" mb="20px">
          <FormContentVertical>
            <Txt20>아이디</Txt20>
            <LoginFormInput type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>비밀번호</Txt20>
            <LoginFormInput type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </FormContentVertical>
        </FormLayout>
        <LoginCTA onClick={onClickLoginBtn}><Txt24Bold>로그인</Txt24Bold></LoginCTA>
        <TxtCTA><ForgetPW>비밀번호 찾기</ForgetPW></TxtCTA>
      </FormContainer>
    </PageLayout>
  );
}

export default Login;
