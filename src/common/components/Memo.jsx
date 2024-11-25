import dayjs from "dayjs";
import React, { useState } from "react";
import {
  AddButton,
  DeleteButton,
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Label,
  MemoContainer,
  MemoItem,
  MemoListContainer,
  MemoTextArea,
  MemoTimestamp,
  Txt16Bold,
  Txt18Bold,
} from "../common";
import { useQuery } from "@tanstack/react-query";
import { getMemos } from "../utils";

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

  const { data: memos } = useQuery({
    queryKey: ["memos"],
    queryFn: async () => await getMemos(props?.noteData?.noteId),
    onSuccess: () => {
      console.log("success");
      console.log(memos);
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });

  // const onCreateMemo = useMutation({
  //   mutationFn: createMemo,
  //   onSuccess: (data) => {
  //     console.log(data);
  //   },
  //   onError: (error) => {
  //     console.log("에러 발생! 아래 메시지를 확인해주세요.", error);
  //   },
  // });

  // const onClickCreateMemo = async () => {
  //   onLogin.mutate({ noteId: , timestamp: , text: });
  // };

  return (
    <FormGroup>
      <FormTitleContainer>
        <Txt18Bold>메모</Txt18Bold>
      </FormTitleContainer>
      <MemoContainer>
        <MemoTextArea
          value={memo}
          onChange={(e) => setMemo(e.target.value)}
          placeholder="메모를 작성해주세요..."
        />
        <AddButton onClick={handleAddMemo}> + </AddButton>
      </MemoContainer>

      <MemoListContainer>
        {memoList.map((item, index) => (
          <MemoItem key={index}>
            <Txt16Bold>{item.text}</Txt16Bold>
            <FlexContainer justifyContent="space-between">
              <MemoTimestamp>{item.timestamp}</MemoTimestamp>
              <DeleteButton onClick={() => handleDeleteMemo(index)}>
                삭제
              </DeleteButton>
            </FlexContainer>
          </MemoItem>
        ))}
      </MemoListContainer>
    </FormGroup>
  );
};
