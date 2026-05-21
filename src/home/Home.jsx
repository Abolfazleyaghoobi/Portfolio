import { useContext } from "react";
import Menu from "../components/menu/Menu";
import SectionIntro from "../components/sectionIntro/SectionIntro";
import { appContext } from "../context/AppContext";
import SkillsSection from "../components/skillsSection/SkillsSection";
import Project from "../components/myProjects/Projects";

function Home() {
  const { showMenu, continuePage } = useContext(appContext);
  console.log("show", showMenu);

  return (
    <>
      {showMenu && <Menu />}
      <SectionIntro />
      {continuePage && (
        <>
          <SkillsSection />
          <Project />
        </>
      )}
    </>
  );
}

export default Home;
