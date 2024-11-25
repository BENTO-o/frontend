import React from 'react'
import { NoteListContainer } from '../../../common/common';
import { NoteItem } from './NoteItem';

export const NoteList = (props) => {
  return (
    <NoteListContainer>
    {props.noteList?.map(note => (
        <NoteItem note={note} key={note.id} />
    ))}
  </NoteListContainer>
  )
}
