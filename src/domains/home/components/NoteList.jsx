import React from 'react'
import { NoteListContainer } from '../../../common/common';
import { NoteItem } from './NoteItem';

const noteList = [
    { title: '3주차 딥러닝 강의', date: '2024-09-24', duration: '1시간 15분' },
    { title: '3주차 딥러닝 강의', date: '2024-09-24', duration: '1시간 15분' },
    { title: '3주차 딥러닝 강의', date: '2024-09-24', duration: '1시간 15분' },
    { title: '3주차 딥러닝 강의', date: '2024-09-24', duration: '1시간 15분' },
  ];

export const NoteList = () => {
  return (
    <NoteListContainer>
    {noteList.map(note => (
        <NoteItem note={note} key={note.id} />
    ))}
  </NoteListContainer>
  )
}
