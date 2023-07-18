export const check = (state, action) => {
  if (action.type === "checked") {
    return {
      ...state,
      checked: true,
    };
  }
};

export const add = (state, action) => {
  console.log(state);
  if (action.type === "add") {
    return {
      ...state,
      todo: action.payload,
    };
  }
};
