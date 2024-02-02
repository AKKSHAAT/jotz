import { useState } from "react";
import { Editor } from "./components/Editor";
import { Route, Routes } from "react-router-dom";
import { LeftMenu } from "./components/LeftMenu";
import { Home } from "./pages/home";
import { Note } from "./pages/Note";

//TODO: add indexed DB functionality done lmaooo
function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      {/* <Explorer/> */}
      <LeftMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<Editor />} />
        <Route path="/:id" element={<Note />} />
      </Routes>
    </main>
  );
}

export default App;
