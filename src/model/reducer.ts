import { useReducer } from "react";
import { InitialState, Action } from "@/interfaces/reducer";

const initialState = {
  sidebarActive: false,
  isLoggedIn: false,
  user: {
    id: "",
    email: "",
    token: ""
  },
  // headlines: [],
  // searchedPosts: []
}

function reducer(state: InitialState, action: Action) {
  switch (action.type) {
    case 'sidebar.toggle': {
      return {
        ...state,
        sidebarActive: !state.sidebarActive
      }
    }

    default: {
      throw Error(`unknown action ${action.type}`);
    }

  }
}

function NewsReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
}

export default NewsReducer

