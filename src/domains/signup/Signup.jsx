import { useState } from "react";
import {
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
} from "../../common/common";
import { signup } from './services/index';
import { useMutation } from "@tanstack/react-query";

function Signup() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
    checkedRule: false,
    checkedPersonalInfo: false,
  });
  
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const register = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log('에러 발생! 아래 메시지를 확인해주세요.', error);
    },
  });

  const onClickSignupBtn = async () => {
    if (formData.password !== formData.passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    } else if (!formData.checkedRule || !formData.checkedPersonalInfo) {
      alert('약관에 동의해주세요.');
      return;
    } else if (!formData.email || !formData.username || !formData.password) {
      alert('모든 항목을 입력해주세요.');
      return;
    } else {
      register.mutate({ email: formData.email, username: formData.username, password: formData.password });
    }
  };

  return (
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      <FormContainer>
        <Txt24Bold>회원가입</Txt24Bold>
        <FormLayout mt="20px" mb="20px">
          <FormContentVertical>
            <Txt20>이메일</Txt20>
            <LoginFormInput type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </FormContentVertical>
          {/* <FormContentVertical>
            <Txt20>이름</Txt20>
            <LoginFormInput type="text" name="username" value={formData.username} onChange={handleInputChange} />
          </FormContentVertical> */}
          <FormContentVertical>
            <Txt20>닉네임</Txt20>
            <LoginFormInput type="text" name="username" value={formData.username} onChange={handleInputChange} />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>비밀번호</Txt20>
            <LoginFormInput type="password" name="password" value={formData.password} onChange={handleInputChange} />
          </FormContentVertical>
          <FormContentVertical>
            <Txt20>비밀번호 확인</Txt20>
            <LoginFormInput type="password" name="passwordConfirm" value={formData.passwordConfirm} onChange={handleInputChange} />
          </FormContentVertical>
          <FormContentLeft>
          <FormCheckbox type="checkbox" name="checkedRule" value={formData.checkedRule} onChange={handleInputChange} />
          <Txt16>(필수)</Txt16>
          <TxtBtn>이용약관</TxtBtn>
          <Txt16>에 동의합니다</Txt16>
        </FormContentLeft>
        <FormContentLeft>
          <FormCheckbox type="checkbox" name="checkedPersonalInfo" value={formData.checkedPersonalInfo} onChange={handleInputChange} />
          <Txt16>(필수)</Txt16>
          <TxtBtn>개인정보 수집 이용</TxtBtn>
          <Txt16>에 동의합니다</Txt16>
        </FormContentLeft>
        </FormLayout>
        <LoginCTA onClick={onClickSignupBtn}>
          <Txt24Bold>회원가입</Txt24Bold>
        </LoginCTA>
      </FormContainer>
    </PageLayout>
  );
}

export default Signup;
