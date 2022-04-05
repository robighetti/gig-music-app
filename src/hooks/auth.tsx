import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface User {
  id: number;
  name: string;
  username: string;
  avatar_url: string;
}

interface SignInCredencials {
  username: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  token: string;
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@gig:token',
        '@gig: user',
      ]);

      if (token[1] && user[1]) {
        api.defaults.headers;
        api.defaults.headers.authorization = `Bearer ${token}`;

        setData({ token: token[1], user: JSON.parse(user[1]) });
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ username, password }) => {
    const response = await api.post('/sessions', {
      username,
      password,
    });

    const { token, user } = response.data;

    await AsyncStorage.multiSet([
      ['@gig:token', token],
      ['@gig:user', JSON.stringify(user)],
    ]);

    api.defaults.headers.authorization = `Bearer ${token}`;

    setData({ token, user });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.multiRemove(['@gig:token', '@gig:user']);

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(
    async (user: User) => {
      await AsyncStorage.setItem('@gig: user', JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });
    },
    [data.token]
  );

  return (
    <AuthContext.Provider
      value={{ user: data.user, signIn, signOut, updateUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
