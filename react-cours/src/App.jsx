import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Component1 from "./components/Component1";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState("mon context");

  return (
    <UserContext.Provider value={user}>
      <Component1 />;
    </UserContext.Provider>
  );
}

export default App;
