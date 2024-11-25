import dayjs from "dayjs";
import React, { useState } from "react";
import {
  DeleteButton,
  FormGroup,
  Label,
  MemoItem,
  MemoListContainer,
  MemoTextArea,
  MemoTimestamp,
  SubmitButton,
} from "../common";

export const Memo = () => {
  const [memo, setMemo] = useState("");
  const [memoList, setMemoList] = useState([]);

  // 메모 추가 이벤트 핸들러
  const handleAddMemo = () => {
    if (memo.trim() === "") return; // 빈 메모는 추가하지 않음

    const newMemo = {
      text: memo,
      timestamp: dayjs().format("YYYY-MM-DD HH:mm:ss"),
    };
    setMemoList([newMemo, ...memoList]); // 최신 메모가 위로 오도록 추가
    setMemo(""); // 입력 필드 초기화
  };

  // 메모 삭제 이벤트 핸들러
  const handleDeleteMemo = (indexToDelete) => {
    setMemoList(memoList.filter((_, index) => index !== indexToDelete)); // 해당 인덱스의 메모를 제외하고 리스트 업데이트
  };

  return (
    <FormGroup>
      <Label>메모</Label>
      <MemoTextArea
        value={memo}
        onChange={(e) => setMemo(e.target.value)}
        placeholder="메모를 작성해주세요..."
      />
      <SubmitButton onClick={handleAddMemo}>메모 추가</SubmitButton>

      <MemoListContainer>
        {memoList.map((item, index) => (
          <MemoItem key={index}>
            <p>{item.text}</p>
            <MemoTimestamp>{item.timestamp}</MemoTimestamp>
            <DeleteButton onClick={() => handleDeleteMemo(index)}>
              삭제
            </DeleteButton>
          </MemoItem>
        ))}
      </MemoListContainer>
    </FormGroup>
  );
};
