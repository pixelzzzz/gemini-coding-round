import { useState } from "react";
import { Context } from "./context";
import { Header } from "./layout/header";
import { Homepage } from "./body/homepage";

function App() {
  const [context, setContext] = useState({});
  return (
    <Context.Provider value={[context, setContext]}>
      <Header />
      <Homepage />
    </Context.Provider>
  );
}

export default App;
