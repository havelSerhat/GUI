import React, { createContext, useState } from "react";

const RTCContext = createContext(undefined);

// A "provider" is used to encapsulate only the
// components that needs the state in this context
export function RTCContextAPI({ children }) {
    const [myFileContent, setMyFileContent] = useState({});

  return (
    <RTCContext.Provider value={myFileContent}>
 
        {children}
  
    </RTCContext.Provider>
  );
}
