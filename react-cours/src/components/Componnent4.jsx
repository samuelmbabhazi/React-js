import React, { useContext } from "react";
import { UserContext } from "../App";

export default function Componnent4() {
  const user = useContext(UserContext);

  return <div>{user}</div>;
}
