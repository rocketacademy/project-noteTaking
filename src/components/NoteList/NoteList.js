import "./NoteList.css";
import { useEffect, useContext } from "react";
import { NotesContext } from "../../provider/NotesProvider";
import { fetchAction } from "../../reducer/notes";

// this component can be used to list out all existing notes and make them clickable to be shown in the noteDetail compenents
export default function NoteList({modeChange, noteChange}) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

  return (
    <div className="listContainer">
    </div>
  );
}
