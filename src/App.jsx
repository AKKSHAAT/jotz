import { useState } from "react";
import { Editor } from "./components/Editor";
import { Route, Routes } from "react-router-dom";
import { LeftMenu } from "./components/LeftMenu";
import { Home } from "./pages/home";
import { Note } from "./pages/Note";
import { TitleBar } from "./components/TitleBar";
// import is from "electron-is";

//TODO: add indexed DB functionality done lmaooo
function App() {
  const [count, setCount] = useState(0);
  function isElectron() {
    // Renderer process
    if (typeof window !== 'undefined' && typeof window.process === 'object' && window.process.type === 'renderer') {
        return true;
    }

    // Main process
    if (typeof process !== 'undefined' && typeof process.versions === 'object' && !!process.versions.electron) {
        return true;
    }

    // Detect the user agent when the `nodeIntegration` option is set to true
    if (typeof navigator === 'object' && typeof navigator.userAgent === 'string' && navigator.userAgent.indexOf('Electron') >= 0) {
        return true;
    }

    return false;
}

  return (
    <>
      {isElectron() && (
        <div className="custom-title-bar">
          <TitleBar />
        </div>
      )}
      <main>
        {/* <Explorer/> */}
        <LeftMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<Editor />} />
          <Route path="/:id" element={<Note />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
