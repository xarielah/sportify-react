import { createContext, useState } from "react";

const defaultContext: InitialContext = {
  user: null,
  isLogged: false,
  isLoading: true,
};

export const appContext = createContext<AppContext>({
  isLogged: false,
  user: null,
  setUser: () => {},
  removeUser: () => {},
  isLoading: true,
});

export default function AppContextProvider({ children }: IAppContextProvider) {
  const [state, setState] = useState<InitialContext>(defaultContext);

  const setUser = (user: User) => {
    if (!user) return removeUser();
    setState({ ...appContext, user, isLogged: true, isLoading: false });
  };

  const removeUser = () => {
    setState({ ...appContext, user: null, isLogged: false, isLoading: false });
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
  isLoading: boolean;
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
