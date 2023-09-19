import "./NoteList.css";
import { useEffect, useContext } from "react";
import { NotesContext } from "../../provider/NotesProvider";
import {fetchAction } from "../../reducer/notes";

export default function NoteList({modeChange, noteChange}) {
  const { NotesDispatch, notesList } = useContext(NotesContext);

  useEffect(() => {
    NotesDispatch(fetchAction());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleClick = (e) =>{
    noteChange(e.target.id)
    modeChange('view')
  };

  const newNote = ()=>{
    modeChange('new')
  }

  return (
    <div className="listContainer">
      <h3>Notes:</h3>
      <div className="list">
        {notesList.length > 0
          ? notesList.map((note) => {
              return (
                <div
                  className="listItem clickable"
                  key={note.id}
                  id={note.id}
                  onClick={(e) => handleClick(e)}
                >
                  <h4 className='clickable' id={note.id}>
                    {note.title}
                  </h4>
                  <p
                    className="dateDisplay clickable"
                    id={note.id}
                  >{`${note? new Date(note.date).toLocaleDateString("en-UK"):''}`}</p>
                </div>
              );
            })
          : null}
      </div>
      <button className='editBtn' onClick={newNote}>Add New Note</button>
    </div>
  );
}
