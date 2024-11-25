import React, { useState } from "react";
import {
  AddButton,
  DeleteButton,
  FieldItem,
  FieldListContainer,
  FormGroup,
  Input,
  Label,
} from "../common";

export const NoteField = () => {
  const [field, setField] = useState("");
  const [fieldList, setFieldList] = useState([]);

  // 분야 추가 이벤트 핸들러
  const handleAddField = () => {
    if (field.trim() === "" || fieldList.includes(field)) return; // 빈 입력 또는 중복 추가 방지

    setFieldList([...fieldList, field]); // 기존 분야 리스트에 추가
    setField(""); // 입력 필드 초기화
  };

  // 분야 삭제 이벤트 핸들러
  const handleDeleteField = (fieldToDelete) => {
    setFieldList(fieldList.filter((f) => f !== fieldToDelete)); // 삭제하려는 분야만 제외하고 리스트 업데이트
  };
  return (
    <FormGroup>
      <Label>분야</Label>
      <Input
        type="text"
        value={field}
        onChange={(e) => setField(e.target.value)}
        placeholder="분야 입력하기"
      />
      <AddButton onClick={handleAddField}>추가</AddButton>
      <FieldListContainer>
        {fieldList.map((item, index) => (
          <FieldItem key={index}>
            <span>{item}</span>
            <DeleteButton onClick={() => handleDeleteField(item)}>
              삭제
            </DeleteButton>
          </FieldItem>
        ))}
      </FieldListContainer>
    </FormGroup>
  );
};
