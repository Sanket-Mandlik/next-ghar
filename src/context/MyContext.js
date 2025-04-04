// filepath: c:\Users\ASUS\next-ghar\src\context\MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
const MyContext = createContext();

// Create the provider component
const MyContextProvider = ({ children }) => {
  const [state, setState] = useState(null); // Example state

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };