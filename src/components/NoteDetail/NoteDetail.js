import { useState, useEffect, useContext } from "react";
import "./NoteDetail.css";
import { NotesContext } from "../../provider/NotesProvider";
import { addAction, deleteAction, editAction } from "../../reducer/notes";

export default function NoteDetail(PROPS) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

 

  return (
    <div className="detailContainer">
    </div>
  );
}
