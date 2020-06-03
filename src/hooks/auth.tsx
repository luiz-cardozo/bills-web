import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface ISignInCredentials {
  email: string;
  password: string;
}

interface IAuthContextData {
  user: object;
  signIn(credentials: ISignInCredentials): Promise<void>;
  signOut(): void;
}

interface IAuthState {
  token: string;
  user: object;
}

const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<IAuthState>(() => {
    const token = localStorage.getItem('@Bills:token');
    const user = localStorage.getItem('@Bills:user');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as IAuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@Bills:token', token);
    localStorage.setItem('@Bills:user', JSON.stringify(user));

    setData({ token, user });
  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Bills:token');
    localStorage.removeItem('@Bills:user');
    setData({} as IAuthState);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
