import { GET, FETCH, ADD, EDIT, DELETE } from "./notesActionTypes";

export const initialState = [
  {
    id: 1,
    title: "This is my first Note",
    date: new Date(),
    content: "I will put stuff into here as my first note",
  },
  {
    id: 2,
    title: "This is my second Note",
    date: new Date(),
    content: "I will put stuff into here as my second note",
  },
];

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
      const lastId = state[state.length - 1].id;
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
