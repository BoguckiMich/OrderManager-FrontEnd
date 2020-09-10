import * as actions from "./actions";

const initialState = {
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.USERS_FETCHED: {
      return {
        ...state,
        users: action.users,
      };
    }
  }

  return state;
};

export default reducer;
