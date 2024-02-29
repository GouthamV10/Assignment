// reducers/tasksReducer.js
const initialState = {
  tasksData: [], // Initial tasks data
  clickedRowIndex: null, // Index of the clicked row
};

export const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_TASKS_DATA":
      return {
        ...state,
        tasksData: action.payload,
      };
    case "SET_CLICKED_ROW_INDEX":
      return {
        ...state,
        clickedRowIndex: action.payload,
      };
    default:
      return state;
  }
};
