export const check = (state, action) => {
  switch (action.type) {
    case "delete":
      return state.filter(
        (todo) =>
          todo.id !== action.payload && [...state, { ...todo, checked: true }]
      );
    case "check":
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, checked: !todo.checked } : todo
      );
    case "add":
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100),
          todo: action.payload,
          checked: false,
        },
      ];
    case "login":
      return state.filter(
        (todos) => todos.username === action.username && [...state]
      );
    case "loginWithGoogle":
      return action.payload;

    default:
      return state;
  }
};
