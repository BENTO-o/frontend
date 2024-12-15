import { useNavigate } from "react-router-dom";
import {
  CarouselImg,
  FlexContainer,
  LoginBtn,
  LogoTxt,
  PageLayout,
  SignupBtn,
  Txt20Bold,
} from "../../common/common";

function Landing() {

  const navigate = useNavigate();

  const onClickLoginBtn = () => {
    navigate('/login');
  };

  const onClickSignupBtn = () => {
    navigate('/signup');
  };

  const handleNavigateToHome = () => {
    navigate(`/`);
  };
  

  return (
    <PageLayout>
      <LogoTxt onClick={handleNavigateToHome}>BENTO</LogoTxt>
      <CarouselImg
        src="https://img.hankyung.com/photo/202102/AD.25394223.1.jpg"
        // src="./assets/MainCarouselImg.jpg"
        alt="carousel"
      />
      <FlexContainer minWidth="500px" width="100%" maxWidth="500px">
        <LoginBtn onClick={onClickLoginBtn}><Txt20Bold>로그인</Txt20Bold></LoginBtn>
        <SignupBtn onClick={onClickSignupBtn}><Txt20Bold>회원가입</Txt20Bold></SignupBtn>
      </FlexContainer>
    </PageLayout>
  );
}

export default Landing;
