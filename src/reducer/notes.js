// Importing all the "actions" we can use in this app, we define these in another file. This is just so we can reuse these easily in the reducer and the action creators below
import { GET, FETCH, ADD, EDIT, DELETE } from "./notesActionTypes";

// This is our contexts initial state, much like how we have an initial state in our useState hooks, this will be the one for our context which will be put together in the provider.
export const initialState = [];



// This is the reducer, these are the actions we will allow our reducer to use, these actions have to match the actions in which we import in line 2 above.
// you can see that the reducer takes in state and action, the action will be an object created by our functions below called the action Creators

// You will also note that this is the ONLY place in this repo that touches upon local Storage, this is what we call "encapsulation" and it allows us to write code easier through out the rest of the project.
export function notesReducer(state, action) {
  switch (action.type) {
    case GET:
      return state;
    case FETCH:
      if (action.payload.notes) {
        return action.payload.notes;
      }
      return [];
    case ADD:
      let lastId = 1;
      if (state.length > 0) {
        lastId = state[state.length - 1].id;
      }
      const newAddedState = [
        ...state,
        { id: lastId + 1, ...action.payload.note },
      ];
      localStorage.setItem("noteList", JSON.stringify(newAddedState));
      return newAddedState;
    case EDIT:
      return state.map((task) => {
        if (task.id === action.payload.id) return action.payload;

        return task;
      });
    case DELETE:
      const newDeletedState = state.filter(
        (note, i) => action.payload.id !== note.id
      );
      localStorage.setItem("noteList", JSON.stringify(newDeletedState));
      return newDeletedState;
    default:
      return state;
  }
}


/**
 * 
 * ACTION CREATORS
 * 
 * These are function we will call, and all it does is it will return an object that first the exact 
 * requirement we need as "action" in the reducer function above.
 * 
 */

export function getAction() {
  return {
    type: GET,
    payload: {},
  };
}

export function fetchAction() {
  const data = localStorage.getItem("noteList");
  let output = null;

  if (data) {
    output = JSON.parse(data);
  }
  return {
    type: FETCH,
    payload: {
      notes: output,
    },
  };
}

export const addAction = (note) => {
  return {
    type: ADD,
    payload: {
      note: {
        title: note.title,
        date: new Date(),
        content: note.content,
      },
    },
  };
};

export function editAction(note) {
  return {
    type: EDIT,
    payload: {
      id: note.id,
      title: note.title,
      date: note.date,
      content: note.content,
    },
  };
}

export function deleteAction(id) {
  return {
    type: DELETE,
    payload: {
      id,
    },
  };
}
