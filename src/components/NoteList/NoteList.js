import "./NoteList.css";
import { useEffect, useContext } from "react";
import { NotesContext } from "../../provider/NotesProvider";
import { fetchAction } from "../../reducer/notes";

export default function NoteList({modeChange, noteChange}) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

  return (
    <div className="listContainer">
    </div>
  );
}
