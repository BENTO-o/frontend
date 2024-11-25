import React, { useState } from "react";
import { FormGroup, Input, Txt16Bold } from "../common";

export const DirectorySelect = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  // 기존의 전체 카테고리 목록
  const categories = [
    "딥러닝",
    "전공종합설계",
    "컴퓨터공학특강",
    "AI",
    "데이터 분석",
  ];

  // 사용자가 input에서 선택하거나 새롭게 입력하는 이벤트 처리
  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value.trim());
  };

  return (
    <FormGroup>
      <Txt16Bold>카테고리 선택</Txt16Bold>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        {/* Input 필드와 Datalist를 하나로 통합하여 사용자가 입력하거나 선택할 수 있는 필드 */}
        <Input
          list="category-options"
          value={selectedCategory}
          onChange={handleCategoryChange}
          placeholder="카테고리 선택 또는 새 카테고리 입력"
          style={{ marginRight: "10px" }}
        />
        <datalist id="category-options">
          {categories.map((category, index) => (
            <option key={index} value={category} />
          ))}
        </datalist>
      </div>
      {selectedCategory && (
        <div>
          <Txt16Bold>선택된 카테고리: {selectedCategory}</Txt16Bold>
        </div>
      )}
    </FormGroup>
  );
};
