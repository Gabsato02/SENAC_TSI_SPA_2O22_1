import React from 'react';

export const UserContext = React.createContext();

const AuthContext = ({ children }) => {
  const [currentUser, setCurrentUser] = React.useState('');

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default AuthContext;
