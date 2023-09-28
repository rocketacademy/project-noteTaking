import { useReducer, createContext } from "react";

//we import the reducer function and the initial state from our note reducer file
import { notesReducer, initialState } from "../reducer/notes";


// We create an empty context to be used for the rest of the application
export const NotesContext = createContext();

const NotesProvider = ({ children }) => {
/**
 * This is where we put it all together,
 * we use a reducer, where we pass in the reducer (the function we will use to update state) and the state
 * 
 * Much like a "useState" hook, it will produce 2 variables... the state(notesList) and the "setState"(notesDispatch)
 */
  const [notesList, notesDispatch] = useReducer(notesReducer, initialState);

  return (
    <NotesContext.Provider value={{ notesDispatch, notesList }}>
      {children}
    </NotesContext.Provider>
  );
};

export default NotesProvider;
