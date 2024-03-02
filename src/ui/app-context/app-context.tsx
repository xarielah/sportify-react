import { createContext, useState } from "react";

const defaultContext: InitialContext = {
  user: null,
  isLogged: false,
};

export const appContext = createContext<AppContext>({
  isLogged: false,
  user: null,
  setUser: () => {},
  removeUser: () => {},
});

export default function AppContextProvider({ children }: IAppContextProvider) {
  const [state, setState] = useState<InitialContext>(defaultContext);

  const setUser = (user: User) => {
    setState({ ...appContext, user, isLogged: true });
  };

  const removeUser = () => {
    setState({ ...appContext, user: null, isLogged: false });
  };

  const store = {
    ...state,
    setUser,
    removeUser,
  } as AppContext;

  return <appContext.Provider value={store}>{children}</appContext.Provider>;
}

interface IAppContextProvider {
  children: React.ReactNode;
}

type InitialContext = {
  user: User;
  isLogged: boolean;
};

export type AppContext = {
  setUser: (user: User) => void;
  removeUser: () => void;
} & InitialContext;

export type User = {
  id: string;
  email: string;
  verified_email: boolean;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
} | null;
