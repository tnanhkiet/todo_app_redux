import { createSelector } from "reselect";

// export const todoListSelector = (state) => {
//   const searchText = searchTextSelector(state);
//   const todosRemaining = state.todoList.filter((todo) => {
//     return todo.name.includes(searchText);
//   });
//   return todosRemaining;
// };

export const todoListSelector = (state) => state.todoList;
export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;

// reselect
export const todosRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    // console.log("Priorities: ", priorities.includes("Low"));
    return todoList.filter((todo) => {
      // console.log("Todo Priority: ", todo);
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.prioriry)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.prioriry) : true)
      );
    });
  }
);
