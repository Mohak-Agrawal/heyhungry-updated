import React, {createContext, useState} from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    
  const [user, setUser] = useState(null);


  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: () => {
            setUser(true);
        },
        logout: () => {
            setUser(null);
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};