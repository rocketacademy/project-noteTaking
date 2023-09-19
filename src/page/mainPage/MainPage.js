import { useState } from "react";
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import NoteList from "../../components/NoteList/NoteList";
import "./MainPage.css";

function MainPage() {
  const [mode, setMode] = useState(null);
  const [noteId, setNoteId] = useState(null)

  const modeChange = (action) =>{
    setMode(action)
  }

  const noteChange = (id)=>{
    setNoteId(id)
  }

  return (
    <div className="mainContainer">
      <NoteList modeChange = {modeChange} noteChange={noteChange}/>
      <NoteDetail mode={mode} noteId={noteId} modeChange={modeChange} noteChange={noteChange}/>
    </div>
  );
}

export default MainPage;
