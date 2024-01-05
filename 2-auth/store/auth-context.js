import { createContext, useState } from 'react';

export const AuthContext = createContext({
  token: '',
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState(null);

  function authenticate(token) {      // gelen token ile guncelleme
    setAuthToken(token);
  }

  function logout(token) {
    setAuthToken(null);
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
