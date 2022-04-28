import { CREATE_BACKPACK, DELETE_BACKPACK } from "../actions/backpackActions";

const initialState = { data: [] };

export const backpack = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_BACKPACK: {
      const { backpack } = payload;
      return { ...state, data: state.data.concat(backpack) };
    }
    case DELETE_BACKPACK: {
      const { backpack } = payload;
      return {
        ...state,
        data: state.data.filter((data) => data.id !== backpack.id),
      };
    }
    default:
      return state;
  }
};
