import React, { useEffect, useState } from "react";
import {
  AddButton,
  DeleteButton,
  FieldItem,
  FieldListContainer,
  FileUploadContainer,
  FormGroup,
  Input,
  Label,
  MemoItem,
  MemoListContainer,
  MemoTextArea,
  MemoTimestamp,
  NoteContainer,
  SubmitButton,
  Txt20Bold,
} from "../../../common/common";
import dayjs from "dayjs";
import { DirectorySelect } from "../../../common/components/DirectorySelect";
import { RecordBox } from "./RecordBox";
import { RecordUpload } from "./RecordUpload";
import { Memo } from "../../../common/components/Memo";
import { NoteField } from "../../../common/components/NoteField";

export const CreateNoteForm = () => {
  return (
    <NoteContainer>
      <Txt20Bold>2024년 10월 4일 00:00의 새로운 노트</Txt20Bold>
      {/* <FormGroup>
        <Label>참석자</Label>
        <Input type="text" value="지연우" readOnly />
      </FormGroup> */}

      <DirectorySelect />

      <NoteField />

      <RecordUpload />

      <Memo />

      <RecordBox />
    </NoteContainer>
  );
};
