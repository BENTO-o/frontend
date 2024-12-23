import { keyframes } from "@emotion/react";
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

export const SpeakerBox = styled.p`
  font-size: 0.875rem; /* 14px */
  line-height: 1.5rem; /* 20px */
  font-weight: 500;
  background: ${(props) => props.background || ""};
  color: ${(props) => props.color || ""};
  text-align: center;
  border-radius: 2rem;
  margin-right: 5px;
  width: 1.5rem;
  height: 1.5rem;
`;

export const LogoTxt = styled(TxtDefault)`
  font-size: 3rem;
  line-height: 5rem;
  font-weight: 700;
  color: #2563eb;
  cursor: pointer;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "space-between"};
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  max-width: ${(props) => props.maxWidth || ""};
  max-height: ${(props) => props.maxHeight || ""};
  min-width: ${(props) => props.minWidth || ""};
  min-height: ${(props) => props.minHeight || ""};
  padding: ${(props) => props.padding || ""};
  margin: ${(props) => props.margin || ""};
  flex-direction: ${(props) => props.flexDirection || ""};
  overflow: ${(props) => props.overflow || ""};
`;

export const SearchbarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 400px; // 원하는 검색창 너비로 설정
  height: 40px; // 검색창 높이
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-radius: 20px;
  padding-right: 3px;
  padding-left: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 16px;
  padding-left: 10px; // 아이콘과의 간격 조정
  color: #333;
  &::placeholder {
    color: #aaa; // 플레이스홀더 색상
  }
`;

export const SearchIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: #2563eb;
  border-radius: ${(props) => props.borderRadius || "1.5rem"};
  width: 2.2rem;
  height: 2.2rem;
`;

export const TopMenuContainer = styled(FlexContainer)`
  width: 100%;
  height: 7vh;
  display: flex;
  // justify-content: center;
  align-items: center;
  border-bottom: 1px solid #eeeeee;
  margin-left: 1rem;
  margin-right: 1rem;
  min-height: 70px;
`;

export const TopMenu = styled(FlexContainer)`
  gap: 0.5rem;
  width: 50%;
  justify-content: flex-start;
  margin-left: 1rem;
`;

// TopMenuItem: 각 메뉴 항목의 스타일
export const TopMenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 10px 15px;
  background-color: #b9b9b9;
  color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`;

export const LeftMenuItem = styled(FlexContainer)`
  justify-content: space-between;
  width: 90%;
  cursor: pointer;
  margin-top: 1rem;
`;

export const DirectoryItem = styled(FlexContainer)`
  justify-content: flex-start;
  cursor: pointer;
`;

export const DirectoryContainer = styled(FlexContainer)`
  width: 13vw;
  cursor: pointer;
  border-radius: 10px;
  padding: 3px;
  background-color: ${(props) => (props.isCurrent ? "#f0f0f0" : "#ffffff")};
`;

export const DirectoryList = styled(FlexContainer)`
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const InnerLeftMenu = styled(FlexContainer)`
  width: 100%;
  height: ${(props) => props.height || "70vh"};
  flex-direction: column;
  padding: 1rem;
  border-top: ${(props) => props.borderTop || ""};
`;

export const LeftMenu = styled(FlexContainer)`
  width: 100%;
  height: 100%;
  flex-direction: column;
`;

export const LeftMenuContainer = styled(FlexContainer)`
  width: 15vw;
  height: 100vh;
  border-right: 1px solid #eeeeee;
  padding-right: 1rem;
  padding-left: 1rem;
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
  padding-left: 10px;
  margin-left: -10px;
`;

export const FormCheckbox = styled.input`
  width: 20px;
  height: 20px;
  margin-right: 10px;
`;

export const FormContentVertical = styled(FlexContainer)`
  align-items: flex-start;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
`;

export const FormContentLeft = styled(FlexContainer)`
  align-items: center;
  justify-content: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
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

export const VerticalLineEEE = styled.div`
  height: 100%;
  background-color: #eeeeee;
  width: 1px;
  margin-left: 16px;
  margin-right: 16px;
`;

// Hover 시 이미지가 회전하고 확대되는 애니메이션 정의
const hoverEffect = keyframes`
  0% {
    transform: scale(1) rotate(0deg);
    filter: brightness(100%);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
  50% {
    transform: scale(1.1) rotate(3deg);
    filter: brightness(120%);
    box-shadow: 0px 15px 25px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: scale(1.00) rotate(0deg);
    filter: brightness(110%);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const shineEffect = keyframes`
  0% {
    background-position: -150%;
  }
  50% {
    background-position: 150%;
  }
  100% {
    background-position: -150%;
  }
`;

export const CarouselImg = styled.img`
  max-width: 100%;
  max-height: 100%;
  margin-top: 50px;
  margin-bottom: 50px;
  border-radius: 20px;
  transition: transform 0.5s ease, opacity 0.5s ease, box-shadow 0.5s ease;

  // &:hover {
  //   transform: scale(1.05); /* 이미지 확대 */
  //   opacity: 0.9; /* 약간 투명하게 */
  //   box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  // }
  &:hover {
    animation: ${hoverEffect} 0.8s ease forwards;
  }

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.8) 50%,
      rgba(255, 255, 255, 0.2) 100%
    );
    background-size: 200% 200%;
    animation: ${shineEffect} 1.5s infinite;
    pointer-events: none;
  }
`;

export const LoginBtn = styled.button`
  width: 200px;
  height: 70px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 20px;
  cursor: pointer;
`;

export const SignupBtn = styled(LoginBtn)`
  padding: 10px 20px;
  background-color: #f7f7f7;
  color: #404040;
  cursor: pointer;
`;

export const SaveBtn = styled.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

export const LogoutBtn = styled.button`
  padding: 10px 20px;
  background-color: #e74c3c;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  cursor: pointer;
`;

export const RollbackBtn = styled(SaveBtn)`
  background-color: #f7f7f7;
  color: #404040;
  cursor: pointer;
`;

export const LoginCTA = styled.button`
  width: 100%;
  height: 60px;
  background-color: #2563eb;
  color: #ffffff;
  border: none;
  border-radius: 30px;
  cursor: pointer;
    &:hover {
    transform: scale(1.05); /* 이미지 확대 */
    opacity: 0.9; /* 약간 투명하게 */
    // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }
`;

export const TxtCTA = styled(FlexContainer)`
  width: 100%;
  algin-items: center;
  justify-content: center;
  border: none;
  border-radius: 30px;
  margin-top: 20px;
  cursor: pointer;
  &:hover {
    transform: scale(1.05); /* 이미지 확대 */
    opacity: 0.9; /* 약간 투명하게 */
    // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }
`;

export const ForgetPW = styled.a`
  color: #2563eb;
  font-size: 20px;
  text-decoration: underline;
  cursor: pointer;
`;

export const TxtBtn = styled.a`
  color: ${(props) => props.color || "#999999"};
  font-size: ${(props) => props.fontSize || "1rem"};
  line-height: ${(props) => props.lineHeight || "1.5rem"};
  text-decoration: underline;
  &:hover {
    background-color: #f0f0f0;
    transform: scale(1.1); /* 이미지 확대 */
    opacity: 0.9; /* 약간 투명하게 */
    // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }
`;

export const CustomIcon = styled.img`
  width: ${(props) => props.width || "1.5rem"};
  height: ${(props) => props.height || "1.5rem"};
  margin-right: ${(props) => props.mr || "0.5rem"};
  &:hover {
    transform: scale(1.1); /* 이미지 확대 */
    opacity: 0.9; /* 약간 투명하게 */
    // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }
`;

export const NoteListContainer = styled.div`
  width: 100%;
  margin: 20px;
  padding: 20px;
  height: 49.5vh;
`;

export const NoteItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  margin-left: 3rem;
  margin-right: 3rem;
  border-bottom: 1px solid #eeeeee;
  cursor: pointer;
  &:last-child {
    border-bottom: none; // 마지막 항목은 경계선을 제거
  }
`;

export const NoteItemInnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  &:hover {
    transform: scale(1.05); /* 이미지 확대 */
    opacity: 0.9; /* 약간 투명하게 */
    // box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2); /* 그림자 효과 */
  }
`;

export const NoteTitle = styled.span`
  flex: 2;
  font-size: 16px;
  font-weight: bold;
  color: #333;
`;

export const NoteInfo = styled.span`
  flex: 1;
  font-size: 14px;
  color: #666;
  text-align: center;
`;

// 노트 컨테이너 스타일
export const NoteContainer = styled.div`
  padding: 20px;
  // background-color: #ffffff;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  // border-radius: 10px;
  width: 80vw;
  margin: 2rem auto;
`;
export const DetailMemoContainer = styled.div`
  padding: 10px;
  // background-color: #ffffff;
  // box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  // border-radius: 10px;
  width: 30vw;
`;

// 폼 그룹 스타일
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: ${(props) => props.width || ""};
`;

// 레이블 스타일
export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  color: #555;
`;

// 입력 스타일
export const Input = styled.input`
  padding: 10px;
  min-width: 20rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  margin-right: 10px;
  &::placeholder {
    color: #aaa;
  }
`;

// 입력 스타일
export const LeftSideInput = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  margin-right: 10px;
  &::placeholder {
    color: #aaa;
  }
`;

// 파일 업로드 컨테이너 스타일
export const FileUploadContainer = styled(FlexContainer)`
  border: 2px dashed #ccc;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
  justify-content: center;
  color: #888;
  background-color: #f9f9f9;
  cursor: pointer;
  height: 20vh;
  width: 80%;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// 메모 텍스트 에어리어 스타일
export const MemoTextArea = styled.textarea`
  width: 80%;
  height: 20vh;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  resize: none;
  margin-right: 10px;

  &::placeholder {
    color: #aaa;
  }
`;

export const MemoContainer = styled(FlexContainer)`
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const SubmitButton = styled.button`
  margin-top: 10px;
  padding: 10px 20px;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
`;

// 메모 리스트 컨테이너
export const MemoListContainer = styled.div`
  margin-top: 20px;
`;

// 개별 메모 아이템 스타일
export const MemoItem = styled.div`
  display: flex;
  max-width: 80%;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #f9f9f9;
`;

// 메모 타임스탬프 스타일
export const MemoTimestamp = styled.span`
  display: block;
  font-size: 12px;
  color: #999;
  margin-top: 5px;
`;

// 버튼 스타일
export const AddButton = styled.button`
  padding: 10px 20px;
  background-color: #2563eb;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #2980b9;
  }
`;

// 분야 리스트 컨테이너 스타일
export const FieldListContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
`;

// 개별 분야 아이템 스타일
export const FieldItem = styled.div`
  display: flex;
  width: fit-content;
  min-width: 10rem;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-right: 10px;
  background-color: #f9f9f9;
`;

// 삭제 버튼 스타일
export const DeleteButton = styled.button`
  padding: 5px 10px;
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin-left: 10px;
  &:hover {
    background-color: #c0392b;
  }
`;

// 선택 상자 스타일
export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  border: none;
  background: none;
  font-size: 16px;
  min-width: 100%;
  color: inherit;
  &::placeholder {
    color: #aaa;
  }
`;

export const SelectWrapper = styled.div`
  padding: 10px;
  min-width: 20rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  color: #333;
  margin-right: 10px;
  display: inline-block;
`;

// 녹음 컨테이너 스타일
export const RecorderContainer = styled.div`
  position: fixed;
  bottom: 20px; /* 화면 아래에서 20px 위 */
  right: 20px; /* 화면 오른쪽에서 20px 왼쪽 */
  padding: 20px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 300px; /* 녹음 컨테이너의 너비 */
  text-align: center;
  display: flex;
  align-items: center;
  background-color: #60a5fa;
  border-radius: 10px;
  padding: 10px;
  width: fit-content;
`;

// 녹음 버튼 스타일
export const RecordButton = styled.button`
  padding: 10px 20px;
  background-color: ${(props) => (props.isRecording ? "#e74c3c" : "#3498db")};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-bottom: 20px;

  &:hover {
    background-color: ${(props) => (props.isRecording ? "#c0392b" : "#2980b9")};
  }
`;

export const TimeDisplay = styled.span`
  font-size: 16px;
  color: #404040;
  margin-right: 10px;
`;

export const AudioVisualizer = styled.div`
  width: 40px;
  height: 10px;
  background-color: #404040;
  margin-right: 20px;
`;

export const ControlButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  background-color: #eff6ff;
  border-radius: 10px;
  padding: 5px;
`;

export const RecorderControlButton = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

// 녹음된 파일 리스트 스타일
export const RecordingList = styled.div`
  margin-top: 20px;
  text-align: left;
`;

// 개별 녹음 항목 스타일
export const RecordingItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
`;

// 녹음 버튼 스타일
export const ControlButton = styled.button`
  padding: 10px 15px;
  background-color: ${(props) => props.color || "#3498db"};
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  margin: 5px;

  &:hover {
    opacity: 0.9;
  }
`;

export const FormTitleContainer = styled(FlexContainer)`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
`;

export const MainContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #ffffff;
  height: 100%;
`;

export const TitleSection = styled.div`
  margin-bottom: 20px;
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

export const DateTime = styled.p`
  font-size: 16px;
  color: #666;
`;

export const FieldLabel = styled.p`
  font-size: 16px;
  margin-top: 5px;
  color: #444;
`;

export const RecordContainer = styled.div`
  margin-bottom: 30px;
`;

export const RecordItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
`;

export const RecordIcon = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #ccc;
  margin-right: 15px;
`;

export const RecordText = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

// export const MemoContainer = styled.div`
//   margin-bottom: 30px;
//   border-left: 4px solid #3498db;
//   padding-left: 15px;
// `;

export const MemoTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const MemoText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  margin-bottom: 5px;
`;

export const AISummaryContainer = styled.div`
  border-left: 4px solid #2ecc71;
  padding-left: 15px;
`;

export const AISummaryTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const AISummaryText = styled.p`
  font-size: 14px;
  line-height: 1.4;
`;

export const DividerWithIcon = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 10px 0;

  & > *:not(:last-child) {
    flex-grow: 1;
  }
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 10px;
  margin-bottom: 10px;

  input {
    margin-right: 5px;
  }

  label {
    font-size: 14px;
    color: #333;
  }
`;

// TagContainer 컴포넌트
export const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
`;

export const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f0f0f0;
  padding: 5px 10px;
  border-radius: 15px;
  font-size: 14px;
  color: #333;
  gap: 5px;
  margin-bottom: 10px;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #e74c3c;
  cursor: pointer;
  font-size: 12px;

  &:hover {
    color: #c0392b;
  }
`;

export const ProgressBarWrapper = styled.div`
  min-width: 20rem;
  height: 38px;
  background-color: #e0e0e0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  padding-right: 20px;
  border: 1px solid #ddd;
`;

export const ProgressBarFill = styled.div`
  width: ${(props) => props.percentage}%;
  height: 100%;
  background-color: #2563eb;
  transition: width 0.3s ease-in-out;
`;
