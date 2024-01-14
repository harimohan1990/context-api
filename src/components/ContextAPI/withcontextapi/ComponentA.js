import React, { useState, createContext } from "react";
import ComponentC from "./ComponentC";

export const UserContext = createContext();

export default function ComponentA() {
  const [user, setUser] = useState("Hi Context Hook");

  return (
    <UserContext.Provider value={{ dataholder: user }}>
      <ComponentC />
    </UserContext.Provider>
  );
}