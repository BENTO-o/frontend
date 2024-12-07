import React, { useEffect, useState } from "react";
import {
  AddButton,
  DeleteButton,
  FieldItem,
  FieldListContainer,
  FileUploadContainer,
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Input,
  Label,
  MemoItem,
  MemoListContainer,
  MemoTextArea,
  MemoTimestamp,
  NoteContainer,
  SubmitButton,
  Txt20Bold,
  Txt24Bold,
} from "../../../common/common";
import dayjs from "dayjs";
import { DirectorySelect } from "../../../common/components/DirectorySelect";
import { RecordBox } from "./RecordBox";
import { RecordUpload } from "./RecordUpload";
import { Memo } from "../../../common/components/Memo";
import { NoteField } from "../../../common/components/NoteField";
import { useCreateNoteFormStore } from "../../../stores/useCreateNoteForm";
import { useMutation } from "@tanstack/react-query";
import { createNote } from "../services";
import { useNavigate } from "react-router-dom";

export const CreateNoteForm = (props) => {
  const navigate = useNavigate();
  const { form, setFormField, resetForm } = useCreateNoteFormStore(); // zustand 훅 사용하여 form 상태 가져오기

  const onCreate = useMutation({
    mutationFn: createNote,
    onSuccess: (data) => {
      console.log(data);
      navigate(`/`);

    },
    onError: (error) => {
      console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
    },
  });

  const onClickCreate = async () => {
    onCreate.mutate(form);
  };

  const handleTitleChange = (e) => {
    setFormField("title", e.target.value);
  };

  return (
    <NoteContainer>
      <Txt24Bold>노트 생성하기</Txt24Bold>
      <FlexContainer justifyContent="space-between" width="100%">
        <FlexContainer flexDirection="column" alignItems="flex-start">
          <FormTitleContainer>
            <Txt20Bold>제목</Txt20Bold>
          </FormTitleContainer>
          <Input
            value={form.title}
            onChange={handleTitleChange}
            placeholder="제목을 입력해주세요"
          />
        </FlexContainer>
        <AddButton onClick={onClickCreate}> 노트 생성 </AddButton>
      </FlexContainer>

      <DirectorySelect />

      <NoteField />

      {!props.isRecord && (<RecordUpload />)}

      {/* <Memo /> */}

      
      {props.isRecord && (<RecordBox />)}
    </NoteContainer>
  );
};
