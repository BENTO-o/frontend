import React, { useEffect, useState } from "react";
import { CustomIcon, SearchbarContainer, SearchIconContainer, SearchInput } from "../common";
import Icon_Search from "../../assets/Search.svg";
import { useSearchStore } from "../../stores/useSearch";

export const Searchbar = () => {
  // Zustand state
  const setSearchQuery = useSearchStore((state) => state.setSearchQuery);

  // Local state for input
  const [searchInput, setSearchInput] = useState("");

  const handleInputChange = (e) => {
    setSearchInput(e.target.value); // Update local state
  };

  const handleSearchSubmit = () => {
    // if (searchInput.trim() !== "") {
    //   setSearchQuery(searchInput); // Update Zustand store only when input is non-empty
    // }
    setSearchQuery(searchInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent default form submission behavior
      handleSearchSubmit(); // Submit search
    }
  };

  useEffect(() => {
    console.log("Search query updated:", searchInput);
  }, [searchInput]);

  return (
    <SearchbarContainer>
      <SearchInput
        value={searchInput} // Bind input to local state
        onChange={handleInputChange} // Update local state
        onKeyDown={handleKeyDown} // Submit on Enter key press
        placeholder="검색어를 입력해주세요..."
      />
      <SearchIconContainer onClick={handleSearchSubmit}>
        <CustomIcon src={Icon_Search} alt="검색" mr="0" />
      </SearchIconContainer>
    </SearchbarContainer>
  );
};
