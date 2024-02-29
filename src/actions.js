export const DELETE_TASK = "DELETE_TASK";

export const deleteTask = (index) => ({
  type: DELETE_TASK,
  payload: index,
});

export const setTasksData = (data) => ({
  type: "SET_TASKS_DATA",
  payload: data,
});

export const setClickedRowIndex = (index) => ({
  type: "SET_CLICKED_ROW_INDEX",
  payload: index,
});
