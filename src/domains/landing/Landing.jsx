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
  return (
    <PageLayout>
      <LogoTxt>BENTO</LogoTxt>
      <CarouselImg
        src="https://img.hankyung.com/photo/202102/AD.25394223.1.jpg"
        // src="./assets/MainCarouselImg.jpg"
        alt="carousel"
      />
      <FlexContainer minWidth="500px" width="100%" maxWidth="500px">
        <LoginBtn><Txt20Bold>로그인</Txt20Bold></LoginBtn>
        <SignupBtn><Txt20Bold>회원가입</Txt20Bold></SignupBtn>
      </FlexContainer>
    </PageLayout>
  );
}

export default Landing;
