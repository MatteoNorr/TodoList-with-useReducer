import { createContext } from "react";

export const Context = createContext({});

export const users = [
  {
    id: 1,
    todo: "Finish basic exercise",
    checked: false,
  },
  {
    id: 2,
    todo: "Finish advanced exercise",
    checked: false,
  },
  {
    id: 3,
    todo: "Survive",
    checked: false,
  },
];
