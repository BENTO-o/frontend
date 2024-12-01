import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  CustomIcon,
  TopMenu,
  TopMenuContainer,
  TopMenuItem,
  Txt16Bold,
} from '../common';
import Icon_Mic from '../../assets/Mic.svg';
import Icon_FileCreate from '../../assets/FileCreate.svg';
import { Searchbar } from './Searchbar';

export const TopBar = () => {
  const navigate = useNavigate();

  const handleNavigateToCreateNote = (isRecord) => {
    navigate(`/createNote?isRecord=${isRecord}`);
  };

  return (
    <TopMenuContainer>
      <TopMenu>
      <TopMenuItem onClick={() => handleNavigateToCreateNote(true)}>
          <CustomIcon src={Icon_Mic} />
          <Txt16Bold>음성 녹음하기</Txt16Bold>
        </TopMenuItem>
        <TopMenuItem onClick={() => handleNavigateToCreateNote(false)}>
          <CustomIcon src={Icon_FileCreate} />
          <Txt16Bold>파일 첨부하기</Txt16Bold>
        </TopMenuItem>
      </TopMenu>
      <Searchbar />
    </TopMenuContainer>
  );
};

export default TopBar;
