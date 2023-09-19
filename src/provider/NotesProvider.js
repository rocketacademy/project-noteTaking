import { useReducer, createContext } from "react";

import { notesReducer, initialState } from "../reducer/notes";
// import {ThemeContext} from './App'

// Create empty global state
export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
  // todoList is the state variable, and dispatch is the function we can
  // use to manipulate todoList. The dispatch function wraps the toDoReducer
  // reducer function passed to useReducer.
  const [notesList, NotesDispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ NotesDispatch, notesList }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
