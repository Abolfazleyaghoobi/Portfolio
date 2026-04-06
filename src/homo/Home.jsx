import { useContext } from "react";
import Menu from "../components/menu/Menu";
import SectionIntro from "../components/sectionIntro/SectionIntro";
import { appContext } from "../context/AppContext";

function Home() {
    const {showMenu}=useContext(appContext)
    console.log('show', showMenu)


  return (
    <>
      {showMenu && <Menu />}
      <SectionIntro />
    </>
  );
}

export default Home;
