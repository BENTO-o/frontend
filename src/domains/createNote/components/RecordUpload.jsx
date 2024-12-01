import React, { useEffect, useState } from "react";
import {
  FileUploadContainer,
  FormGroup,
  FormTitleContainer,
  Label,
  Txt18Bold,
} from "../../../common/common";
import { useCreateNoteFormStore } from "../../../stores/useCreateNoteForm";

export const RecordUpload = () => {

  const { form, setFormField, resetForm } = useCreateNoteFormStore(); // zustand 훅 사용하여 form 상태 가져오기

  // 파일 선택 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFormField("file", file);
    }
  };

  // 드래그 앤 드롭 관련 이벤트 핸들러
  const handleDragOver = (event) => {
    event.preventDefault(); // 기본 동작을 막아 드롭 가능하도록 함
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    if (file) {
      setFormField("file", file);
    }
  };

  return (
    <FormGroup>
      <FormTitleContainer>
        <Txt18Bold>파일</Txt18Bold>
      </FormTitleContainer>
      <FileUploadContainer
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => document.getElementById("fileInput").click()}
      >
        {form?.file ? (
          <div>
            <p>{form?.file.name}</p>
          </div>
        ) : (
          <div>
            <p>업로드할 파일 놓기 또는 파일 업로드</p>
          </div>
        )}
      </FileUploadContainer>
      <input
        id="fileInput"
        type="file"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
    </FormGroup>
  );
};
