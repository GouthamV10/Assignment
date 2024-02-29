import { DELETE_TASK } from "./actions";
import data from "./data";
const initialState = {
  tasksData: data,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_TASK:
      const updatedTasksData = state.tasksData.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        tasksData: updatedTasksData,
      };
    default:
      return state;
  }
};

export default rootReducer;
