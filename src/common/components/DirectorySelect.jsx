import React from "react";
import {
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Select,
  SelectWrapper,
  Txt16Bold,
  Txt18Bold,
} from "../common";
import { useQuery } from "@tanstack/react-query";
import { getFolders } from "../utils";
import { useCreateNoteFormStore } from "../../stores/useCreateNoteForm";

export const DirectorySelect = () => {
  const { form, setFormField } = useCreateNoteFormStore(); // zustand 후복을 사용하여 form 상태 가져오기

  const { data: folders } = useQuery({
    queryKey: ["folders"],
    queryFn: async () => await getFolders({}),
    onSuccess: () => {
      console.log(folders);
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });

  // select 에서 선택한 것을 처리하는 이벤트
  const handleFolderChange = (e) => {
    const selectedValue = e.target.value;
    setFormField("folder", selectedValue); // 폼의 folder 필드를 업데이트
    console.log(selectedValue); // 업데이트된 값을 지정 출력
  };

  return (
    <FormGroup>
      <FormTitleContainer>
        <Txt18Bold>카테고리 선택</Txt18Bold>
      </FormTitleContainer>
      <FlexContainer>
        <SelectWrapper>
          <Select
            value={form.folder}
            onChange={handleFolderChange}
            placeholder="카테고리 선택"
          >
            <option value="" disabled>
              카테고리 선택
            </option>
            {folders?.map((folder, index) => (
              <option key={index} value={folder?.folderName}>
                {folder?.folderName}
              </option>
            ))}
          </Select>
        </SelectWrapper>
        {/* {form.folder && (
          <div>
            <Txt16Bold>선택된 카테고리: {form.folder}</Txt16Bold>
          </div>
        )} */}
      </FlexContainer>
    </FormGroup>
  );
};
