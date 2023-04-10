const initState = [
  {
    id: 1,
    name: "Learn React",
    prioriry: "Medium",
    completed: false,
  },
  {
    id: 2,
    name: "Learn Redux",
    prioriry: "High",
    completed: true,
  },
  {
    id: 3,
    name: "Learn JavaScript",
    prioriry: "Low",
    completed: false,
  },
];

const todoListReducer = (state = initState, action) => {
  console.log({ state, action });
  switch (action.type) {
    case "todoList/addTodo":
      return [...state, action.payload];
    default:
      return state;
  }
};

export default todoListReducer;
