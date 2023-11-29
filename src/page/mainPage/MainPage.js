import { useState } from "react";

// importing the components we will be using
import NoteDetail from "../../components/NoteDetail/NoteDetail";
import NoteList from "../../components/NoteList/NoteList";

// importing css
import "./MainPage.css";

function MainPage() {
  // we have a few states we will use to control the page view, as they will both be used by child components, we will set it here so they both have access
  const [mode, setMode] = useState(null);
  const [noteId, setNoteId] = useState(null);

  // we will create functions to update our state, while we do not use it here, we will pass it down through props so the child components will ahve the ability to edit these states
  const modeChange = (action) => {
    setMode(action);
  };

  const noteChange = (id) => {
    setNoteId(id);
  };

  return (
    <div className="mainContainer">
      <NoteList modeChange={modeChange} noteChange={noteChange} />
      <NoteDetail
        mode={mode}
        noteId={noteId}
        modeChange={modeChange}
        noteChange={noteChange}
      />
    </div>
  );
}

export default MainPage;
