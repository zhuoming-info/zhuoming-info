import { createContext } from 'react';

export const Contexts = createContext({
  deviceSize: "null", 
  user: {
    id: null,
    username: null,
    email: null,
    role: null,
    skill: null,
    intro: null,
  }
});