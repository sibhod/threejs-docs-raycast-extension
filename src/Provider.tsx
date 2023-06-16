import { ReactNode, createContext } from 'react';

const Context = createContext({});

export function Provider({ children }: { children: ReactNode }) {
  return <Context.Provider value={{}}>{children}</Context.Provider>;
}
