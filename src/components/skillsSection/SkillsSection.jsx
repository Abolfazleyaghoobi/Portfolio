// import "./style.css"

import { RiTailwindCssFill } from "react-icons/ri";
import { SiThreedotjs } from "react-icons/si";
import { TbBrandNodejs } from "react-icons/tb";








function SkillsSection() {
  return (
    <>
      <section className="h-dvh w-full  flex flex-col">
        {/* header */}
        <div className="mt-3 ">
          <h1 className="text-center text-[2.5rem] text-gray-500   font-bold test">
            My Skills
          </h1>
           <SiThreedotjs size={133}/>
           <RiTailwindCssFill size={133}/>
           <TbBrandNodejs size={133}/>
        
        </div>
      </section>
    </>
  );
}

export default SkillsSection;
