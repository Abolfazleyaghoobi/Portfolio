import { createContext, useState } from "react";
import SectionIntro from "./components/sectionIntro/SectionIntro";
import AppProvider from "./context/AppContext";
export const appContext = createContext();
function App() {
  return (
    <>
      <AppProvider>
        <SectionIntro />
      </AppProvider>
    </>
  );
}

export default App;
