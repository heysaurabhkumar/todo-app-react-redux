export const addTask = (taskName) => {
  return {
    type: "ADD_TASK",
    payload: taskName
  };
};

export const deleteTask = (index) => {
  return {
    type: "DELETE_TASK",
    payload: index
  };
};
