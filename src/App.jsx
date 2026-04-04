import Menu from "./components/menu/Menu";
import SectionIntro from "./components/sectionIntro/SectionIntro";
import AppProvider from "./context/AppContext";

function App() {
  return (
    <>
      <AppProvider>
        <Menu/>
        <SectionIntro />
      </AppProvider>
    </>
  );
}

export default App;
