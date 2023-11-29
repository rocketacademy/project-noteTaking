import { useState, useEffect, useContext } from "react";
import "./NoteDetail.css";
import { NotesContext } from "../../provider/NotesProvider";
import { addAction, deleteAction, editAction } from "../../reducer/notes";

// importing our rich text editor
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function NoteDetail({ mode, noteId, noteChange, modeChange }) {
  // we will set up some states to use locally, along with importing the context to we can use them together
  const [note, setNote] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { notesDispatch, notesList } = useContext(NotesContext);

  const handleEditClick = () => {
    setTitle(note.title);
    setContent(note.content);
    modeChange("edit");
  };

  const handleDeleteClick = () => {
    notesDispatch(deleteAction(note.id));
    modeChange(null);
  };

  const handleSave = () => {
    if (title === "") {
      window.alert("You are missing a title!");
      return;
    }

    if (content === "") {
      window.alert("You are missing content!");
      return;
    }
    const data = {
      title,
      content,
    };

    if (mode === "new") {
      notesDispatch(addAction(data));
      modeChange("view");
      let newId = 1;
      if (notesList.length > 0) {
        newId = Number(notesList[notesList.length - 1].id) + 1;
      }
      noteChange(newId);
    }

    if (mode === "edit") {
      data.date = note.date;
      data.id = note.id;
      notesDispatch(editAction(data));
      modeChange("view");
    }
    setTitle("");
    setContent("");
  };

  useEffect(() => {
    if (noteId) {
      const result = notesList.filter(
        (notes) => Number(notes.id) === Number(noteId)
      );
      setNote(result[0]);
    }
  }, [noteId, notesList]);

  const titleChange = (e) => {
    setTitle(e.target.value);
  };

  // this function watches our states to determine which html element should be rendered onto our component
  const modeChecker = () => {
    if (mode === "view" && noteId && note) {
      return (
        <>
          <div className="detailHeader">
            <div className="titleContainer">
              <h2>{note.title}</h2>
            </div>
            <div className="dateContainer">
              <p className="dateDisplay">{`${
                note ? new Date(note.date).toLocaleDateString("en-UK") : ""
              }`}</p>
            </div>
          </div>
          <div className="noteDetails">
            <div className="noteContent">
              <div dangerouslySetInnerHTML={{ __html: note.content }} />
            </div>
            <div className="buttonContainer">
              <button className="editBtn" onClick={handleEditClick}>
                Edit
              </button>
              <button className="editBtn dltBtn" onClick={handleDeleteClick}>
                Delete
              </button>
            </div>
          </div>
        </>
      );
    } else if (mode === "new") {
      return (
        <>
          <div className="detailHeader">
            <div className="titleContainer">
              <input
                className="titleInput"
                type="text"
                placeholder="Enter Note Title Here!"
                size="50"
                onChange={(e) => titleChange(e)}
                value={title}
              ></input>
            </div>
            <div className="dateContainer">
              <p className="dateDisplay"></p>
            </div>
          </div>
          <div className="noteDetails">
            <div className="noteContent">
              {/* this is the only part of our code we had to edit to make sure we can use quil */}
              <ReactQuill
                theme="snow"
                className="contentInput"
                value={content}
                onChange={setContent}
              />
            </div>
            <button className="editBtn" onClick={handleSave}>
              Save
            </button>
          </div>
        </>
      );
    } else if (mode === "edit" && noteId && note) {
      return (
        <>
          <div className="detailHeader">
            <div className="titleContainer">
              <input
                className="titleInput"
                type="text"
                placeholder="Enter Note Title Here!"
                size="50"
                onChange={(e) => titleChange(e)}
                value={title}
              ></input>
            </div>
            <div className="dateContainer">
              <p className="dateDisplay"></p>
            </div>
          </div>
          <div className="noteDetails">
            <div className="noteContent">
              {/* this is the only part of our code we had to edit to make sure we can use quil */}
              <ReactQuill
                theme="snow"
                className="contentInput"
                value={content}
                onChange={setContent}
              />
            </div>
            <button className="editBtn" onClick={handleSave}>
              Save
            </button>
          </div>
        </>
      );
    }

    return (
      <h2 className="defaultWarning">
        {" "}
        Click on a note on the left, or click on "add a new note" to begin
      </h2>
    );
  };

  return <div className="detailContainer">{modeChecker()}</div>;
}
