import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => { },
  logout: () => { },
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem('token')

      if (storedToken) {
        setAuthToken(storedToken);
      }
    }

    fetchToken();

  }, [])  // her seferinde calismasi isteniyosa [] ici bos


  function authenticate(token) {      // gelen token ile guncelleme
    setAuthToken(token);
    AsyncStorage.setItem('token', token);    // 'token' isimli degiskene token degeri atama
  }

  function logout(token) {
    setAuthToken(null);
    AsyncStorage.removeItem('token');    // 'token' isimli degiskendeki token degerini silme
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,   // !! -> deger varsa true yoksa false doner
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
