import { ReactNode, createContext, useState } from 'react';

interface IAuthContext {
  authenticated: boolean;
  login: () => void;
  logOut: () => void;
  children?: ReactNode;
}

const defaultValue: IAuthContext = {
  authenticated: false,
  login: () => undefined,
  logOut: () => undefined,
  children: <></>,
};

const AuthContext = createContext<IAuthContext>(defaultValue);

export const AuthProvider: React.FC<IAuthContext> = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(
    defaultValue.authenticated
  );
  const login = () => setAuthenticated(true);
  const logOut = () => setAuthenticated(false);

  return (
    <AuthContext.Provider value={{ authenticated, login, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
