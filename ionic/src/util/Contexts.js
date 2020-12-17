import { createContext } from 'react';

export const Contexts = createContext({
  user: {
    id: null,
    username: null,
    email: null,
    role: null
  }
});