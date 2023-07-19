import { createContext } from "react";

//Context todos
export const Context = createContext();
export const todos = [
  {
    id: 1,
    username: "user1",
    password: "user-1",
    todo: "Finish basic exercise",
    checked: false,
  },
  {
    id: 2,
    username: "user2",
    password: "user-2",
    todo: "Finish advanced exercise",
    checked: false,
  },
  {
    id: 3,
    username: "user3",
    password: "user-3",
    todo: "Survive",
    checked: false,
  },
];
