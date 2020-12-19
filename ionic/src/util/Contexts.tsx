import { createContext } from 'react';

export const Contexts = createContext({
  deviceSize: "null", 
  currentUser: {
    id: null,
    username: null,
    email: null,
    role: null,
    skill: null,
    intro: null,
  }
});