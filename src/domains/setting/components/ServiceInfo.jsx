import React, { useState } from "react";
import {
  AddButton,
  ControlButtonsContainer,
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Input,
  TagContainer,
  Txt16Bold,
  Txt20Bold,
} from "../../../common/common";
import { RadioButton } from "../../../common/components/RadioButton";
import { Tag } from "../../../common/components/Tag";

export const ServiceInfo = () => {
  const [language, setLanguage] = useState("한국어");
  const [tags, setTags] = useState(["딥러닝", "정보보안", "전공종합설계"]);
  const [newTag, setNewTag] = useState("");

  const handleAddTag = () => {
    if (newTag.trim() !== "" && !tags.includes(newTag)) {
      setTags([...tags, newTag]);
      setNewTag("");
    }
  };

  const handleRemoveTag = (tagToRemove) => {
    setTags(tags.filter((tag) => tag !== tagToRemove));
  };
  return (
    <FlexContainer
      width="80%"
      flexDirection="column"
      alignItems="flex-start"
      padding
    >
      <FormTitleContainer>
        <Txt20Bold>서비스 사용 정보</Txt20Bold>
      </FormTitleContainer>
      <FlexContainer flexDirection="column" alignItems="flex-start">
        <FormTitleContainer>
          <Txt16Bold>인식 언어</Txt16Bold>
        </FormTitleContainer>
        <FlexContainer>
          {["한국어", "영어", "일본어", "중국어(간체)", "중국어(번체)"].map(
            (lang) => (
              <RadioButton
                key={lang}
                type="radio"
                name="language"
                value={lang}
                checked={language === lang}
                onChange={() => setLanguage(lang)}
              />
            )
          )}
        </FlexContainer>

        <FormTitleContainer>
          <Txt16Bold>자주 쓰는 단어</Txt16Bold>
        </FormTitleContainer>
        <FlexContainer alignItems="center">
          <Input
            value={newTag}
            onChange={(e) => setNewTag(e.target.value)}
            placeholder="단어 입력"
          />
          <AddButton onClick={handleAddTag}>+</AddButton>
        </FlexContainer>
        <TagContainer>
          {tags.map((tag) => (
            <Tag key={tag}>
              {tag}
            </Tag>
          ))}
        </TagContainer>
      </FlexContainer>
    </FlexContainer>
  );
};
