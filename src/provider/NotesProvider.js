// Importing the necessary react functions
import { useReducer, createContext } from "react";

// importing reducer and state from the reducer files
import { notesReducer, initialState } from "../reducer/notes";

// creating and exporting a new context to be used by children components
export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  // initializing a useReducer (advanced useState), with the state (noteList) and the setState(NotesDispatch) being passed down in the context provider
  const [notesList, NotesDispatch] = useReducer(notesReducer, initialState);

  return (
    // wrapping the context provider AROUND the children component to make sure all children components have access to this
    <NotesContext.Provider value={{ NotesDispatch, notesList }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
