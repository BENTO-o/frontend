import React, { useState } from "react";
import { FileUploadContainer, FormGroup, Label } from "../../../common/common";

export const RecordUpload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  // 파일 선택 이벤트 핸들러
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
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
      setSelectedFile(file);
    }
  };
  return (
    <FormGroup>
        <Label>파일</Label>
        <FileUploadContainer
          onDragOver={handleDragOver}
          onDrop={handleDrop}
          onClick={() => document.getElementById("fileInput").click()}
        >
          {selectedFile ? (
            <div>
              <p>{selectedFile.name}</p>
            </div>
          ) : (
            <>
              <p>업로드할 파일 놓기</p>
              <p>또는</p>
              <p>파일 업로드</p>
            </>
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
