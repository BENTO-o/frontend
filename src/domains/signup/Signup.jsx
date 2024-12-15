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
import { useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

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
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const onRegister = useMutation({
    mutationFn: signup,
    onSuccess: (data) => {
      console.log(data);
      navigate('/login');
    },
    onError: (error) => {
      console.log('에러 발생! 아래 메시지를 확인해주세요.', error);
    },
  });

  const onClickSignupBtn = async (e) => {
    e.preventDefault(); // 폼 제출 동작 방지
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
      onRegister.mutate({ email: formData.email, username: formData.username, password: formData.password });
    }
  };

  const handleNavigateToHome = () => {
    navigate(`/`);
  };

  return (
    <PageLayout>
      <LogoTxt onClick={handleNavigateToHome}>BENTO</LogoTxt>
      {/* form 태그로 수정 */}
      <form onSubmit={onClickSignupBtn}>
        <FormContainer>
          <Txt24Bold>회원가입</Txt24Bold>
          <FormLayout mt="20px" mb="20px">
            <FormContentVertical>
              <Txt20>이메일</Txt20>
              <LoginFormInput
                type="text"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
              />
            </FormContentVertical>
            <FormContentVertical>
              <Txt20>닉네임</Txt20>
              <LoginFormInput
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
              />
            </FormContentVertical>
            <FormContentVertical>
              <Txt20>비밀번호</Txt20>
              <LoginFormInput
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
              />
            </FormContentVertical>
            <FormContentVertical>
              <Txt20>비밀번호 확인</Txt20>
              <LoginFormInput
                type="password"
                name="passwordConfirm"
                value={formData.passwordConfirm}
                onChange={handleInputChange}
              />
            </FormContentVertical>
            <FormContentLeft>
              <FormCheckbox
                type="checkbox"
                name="checkedRule"
                checked={formData.checkedRule}
                onChange={handleInputChange}
              />
              <Txt16>(필수)</Txt16>
              <TxtBtn>이용약관</TxtBtn>
              <Txt16>에 동의합니다</Txt16>
            </FormContentLeft>
            <FormContentLeft>
              <FormCheckbox
                type="checkbox"
                name="checkedPersonalInfo"
                checked={formData.checkedPersonalInfo}
                onChange={handleInputChange}
              />
              <Txt16>(필수)</Txt16>
              <TxtBtn>개인정보 수집 이용</TxtBtn>
              <Txt16>에 동의합니다</Txt16>
            </FormContentLeft>
          </FormLayout>
          <LoginCTA type="submit"> {/* 버튼 타입을 submit으로 설정 */}
            <Txt24Bold>회원가입</Txt24Bold>
          </LoginCTA>
        </FormContainer>
      </form>
    </PageLayout>
  );
}

export default Signup;
