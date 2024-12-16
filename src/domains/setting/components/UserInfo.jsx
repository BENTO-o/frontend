import React, { useRef, useState } from "react";
import {
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Input,
  Txt16Bold,
  Txt20Bold,
} from "../../../common/common";
import Icon_DefaultImg from "../../../assets/DefaultImg.svg";
import { useUserStore } from "../../../stores/useUser";

export const UserInfo = () => {
  const fileInputRef = useRef(null);
  const { user, setUser } = useUserStore(); // zustand 훅 사용하여 form 상태 가져오기

  const [profileImage, setProfileImage] = useState(Icon_DefaultImg);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreviewClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <FlexContainer
      width="80%"
      flexDirection="column"
      alignItems="flex-start"
      padding
    >
      <FormTitleContainer>
        <Txt20Bold>사용자 정보</Txt20Bold>
      </FormTitleContainer>
      <FlexContainer flexDirection="column" alignItems="flex-start">
        <div
          onClick={handlePreviewClick}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            backgroundColor: profileImage ? "transparent" : "#e0e0e0",
            backgroundImage: profileImage ? `url(${profileImage})` : "none",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#999",
            marginRight: "20px",
            cursor: "pointer",
            border: "1px solid #ccc",
          }}
        >
          {!profileImage && "업로드"}
        </div>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          ref={fileInputRef}
          style={{ display: "none" }}
        />
        <div style={{ height: "10px" }} />

        <FlexContainer flexDirection="column" alignItems="flex-start">
          <FormTitleContainer>
            <Txt16Bold>이메일</Txt16Bold>
          </FormTitleContainer>
          <Input value={user.email} />
          {/* <FormTitleContainer>
            <Txt16Bold>연락처</Txt16Bold>
          </FormTitleContainer>
          <Input value={user.email} /> */}
          <FormTitleContainer>
            <Txt16Bold>이름</Txt16Bold>
          </FormTitleContainer>
          <Input value={user.username} />
          <div style={{ height: "10px" }} />
        </FlexContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
