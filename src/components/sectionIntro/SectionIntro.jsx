import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText);
gsap.registerPlugin(useGSAP);
function SectionIntro() {
  const textIntro = useRef(null);
  const border = useRef(null);
  const btnAnimation = useRef(null);
  const showBTN = useRef(null);
  const bodyContainerIntro = useRef(null);
  const containerIntro= useRef(null);
  const itemsRef = useRef([]);
  useGSAP(() => {
    const tl = gsap.timeline();

    let split = SplitText.create(textIntro.current, {
      type: "chars",
    });

    tl.from(split.chars, {
      // color:"red",
      duration: 0.5,
      opacity: 0,
      stagger: 0.1,
      y: 50,
    })
      .from(
        showBTN.current,
        {
          opacity: 0,
          duration: 3,
          y: 50,
        },
        "<",
      )
      .to(split.chars.slice(9, 18), {
        color: "#ff42b4",
        duration: 0.5,
        stagger: 0.1,

        y: -7,
      });
    tl.to(
      split.chars.slice(18, 31),
      {
        color: "#ff42b4",
        stagger: 0.1,
        y: -7,
      },
      "<",
    ).to(
      btnAnimation.current,
      {
        width: "100%",
        duration: 2,
      },
      "<",
    );

    return () => {
      split.revert();
    };
  }, []);
  const hideIntroSection = () => {
    const tl = gsap.timeline();
    tl.to(bodyContainerIntro.current, {
      opacity: 0,
      display: "none",
      duration: 1,
    })
    .to(containerIntro.current, {
      width:"300px",
      height:"400px",
      
      duration:4,
    }
    )
    .to(itemsRef.current[0], {
      width:"70%",
      height:"80%",
      borderRadius:"9px",
      duration:4,
    },"<")
  };
  return (
    <>
      <div className="h-screen w-full bg-[#111621]">
        {/* start intro */}
        <div ref={containerIntro} className=" overflow-hidden bg-amber-700 flex flex-col items-center justify-center h-screen w-full">
          {/* container image */}
          <div className=" flex items-center justify-center">
            <span ref={(el)=>(itemsRef.current[0]=el)} className="w-50 h-50 rounded-[50%] overflow-hidden shadow-[0px_0px_10px_2px_#000000]  inline-block">
              <img src="/public/image/pictureMe.png" alt="" />
            </span>
          </div>
          {/* body */}
          <div ref={bodyContainerIntro} > 
            {/*head text intro  */}
            <h1
              ref={textIntro}
              className="text-gray-400 text-bold text-[15px] mt-3 sm:text-[20px] flex"
            >
              <span> Hello, I'm </span>
              <div className=" overflow-hidden flex flex-col mx-2">
                {" "}
                <span ref={border} className="text-[#ffffff] h-1">
                  {" "}
                  Abolfazle
                </span>
                <span className="">_____________</span>
              </div>
              <span> a Frontend Developer</span>
            </h1>
            {/* btn start intro */}

            <div
              ref={showBTN}
              className="mt-5 mx-auto  bg-[#bcbcbc]  text-white rounded-full hover:bg-[#ff0080] transition-colors duration-300 overflow-hidden w-50 h-10 relative"
            >
              <button
                onClick={hideIntroSection}
                className=" h-[inherit] w-full absolute cursor-pointer"
              >
                Start Intro MySelf
              </button>
              <div
                ref={btnAnimation}
                className="w-0 -z-1  h-[inherit] bg-[#ff0080]   "
              ></div>
            </div>
          </div>
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default SectionIntro;
