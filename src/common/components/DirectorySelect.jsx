import React, { useState } from "react";
import {
  FlexContainer,
  FormGroup,
  FormTitleContainer,
  Input,
  Txt16Bold,
  Txt18Bold,
} from "../common";
import { useQuery } from "@tanstack/react-query";
import { getFolders } from "../utils";

export const DirectorySelect = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: async () => await getFolders({}),
    onSuccess: () => {
      // console.log("success");
      console.log(categories);
    },
    onError: (e) => {
      console.error(e);
    },
    refetchOnMount: "always",
  });


  // 사용자가 input에서 선택하거나 새롭게 입력하는 이벤트 처리
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value.trim());
  };

  return (
    <FormGroup>
      <FormTitleContainer>
        <Txt18Bold>카테고리 선택</Txt18Bold>
      </FormTitleContainer>
      <FlexContainer>
        <Input
          list="category-options"
          value={selectedCategory}
          onChange={handleCategoryChange}
          placeholder="카테고리 선택 또는 새 카테고리 입력"
        />
        <datalist id="category-options">
          {categories?.map((category, index) => (
            <option key={index} value={category} />
          ))}
        </datalist>
        {selectedCategory && (
          <div>
            <Txt16Bold>선택된 카테고리: {selectedCategory}</Txt16Bold>
          </div>
        )}
      </FlexContainer>
    </FormGroup>
  );
};
