import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import userMock from '../mocks/user.mock';

interface User {
  id: number;
  name: string;
  email: string;
  avatar?: string | undefined;
  password: string;
}

interface SignInCredencials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: User;
  signIn(credentials: SignInCredencials): Promise<void>;
  signOut(): void;
  updateUser(user: User): void;
}

interface AuthState {
  user: User;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>({} as AuthState);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const user = await AsyncStorage.getItem('@gigMusic: user');

      if (user) {
        setData({ user: JSON.parse(user) });
      }
    }

    loadStorageData();
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const userData = userMock.filter(
      usr => usr.email === email && usr.password === password
    );

    if (userData.length <= 0) {
      console.log(userData);
      throw new Error('User not find');
    }

    console.log(userData);

    await AsyncStorage.setItem('@gigMusic:user', JSON.stringify(userData));

    setData({ user: userData[0] });
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem('@gigMusic:user');

    setData({} as AuthState);
  }, []);

  const updateUser = useCallback(async (user: User) => {
    if (!user) {
      throw new Error('User not send');
    }

    await AsyncStorage.setItem('@gigMusic: user', JSON.stringify(user));

    setData({ user });
  }, []);

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
