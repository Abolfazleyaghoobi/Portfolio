// import "./style.css"

import Skills from "./Skills";



function SkillsSection() {
  return (
    <>
      <section className="h-dvh w-full  flex flex-col ">
        {/* header */}
        <div className="mt-3 ">
          <h1 className="text-center text-[2.5rem] text-gray-500   font-bold test">
            My Skills
          </h1>
        </div> 
        {/* body */}

        <div className="bg-[#262b3e] xxl:w-[60%] xl:w-[70%] lg:w-[85%] mx-auto overflow-hidden rounded-[9px] mt-4 p-2 md:pb-8 md:px-6">
          <h1 className="text-center text-[1.5rem] text-[#070d13] font-bold">Main Skills</h1>
        {/* icons Container */}
        <section className="mt-4">
            <Skills/>
        </section>


        </div>
      </section>
    </>
  );
}
// 2D2D40

export default SkillsSection;
