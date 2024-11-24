import React from "react";
import { CustomIcon, SearchbarContainer, SearchIconContainer, SearchInput} from '../common'
import Icon_Search from "../../assets/Search.svg";


export const Searchbar = () => {
  return (
    <SearchbarContainer>
      <SearchInput placeholder="검색어를 입력해주세요..." />
      <SearchIconContainer>
        <CustomIcon src={Icon_Search} alt="검색" mr="0" />
      </SearchIconContainer>
    </SearchbarContainer>
  );
};
