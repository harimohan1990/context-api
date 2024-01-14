import React, { useContext } from "react";
import { UserContext } from './ComponentA';

export default function ComponentC() {
  const userContextValue = useContext(UserContext);

  return (
    <div>
      <p>Data from A component to C component is: {userContextValue && userContextValue.dataholder} </p>
    </div>
  );
}