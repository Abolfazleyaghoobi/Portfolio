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
  const containerIntro = useRef(null);
  const itemsRef = useRef([]);
  // _________________________________________________
  const splitRef = useRef(null);

  // ////////////////////////
  useGSAP(() => {
    splitRef.current = SplitText.create(textIntro.current, {
      type: "chars",
    });

    const tl = gsap.timeline();
    tl.from(splitRef.current.chars, {
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
      .to(splitRef.current.chars.slice(9, 18), {
        color: "#ff42b4",
        duration: 0.5,
        stagger: 0.1,

        y: -7,
      });
    tl.to(
      splitRef.current.chars.slice(18, 31),
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
      splitRef.current.revert();
    };
  }, []);
  const hideIntroSection = () => {
    const mm = gsap.matchMedia();

    mm.add("(min-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.to(bodyContainerIntro.current, {
        opacity: 0,
        // display: "none",
        visibility: "hidden",
        // duration: 1,
      })
        .to(
          containerIntro.current,
          {
            width: "50%",
            height: "600px",

            duration: 4,
          },
          "<",
        )
        .to(
          itemsRef.current[1],
          {
            width: "50%",
            display: "flex",
            opacity: 1,
            duration: 2,
          },
          "<",
        )
        .to(itemsRef.current[0], {
          width: "40%",
          height: "80%",
          borderRadius: "9px",
          duration: 1,
        })
        .to(
          itemsRef.current[4],
          {
            display: "block",
            opacity: 1,
          },
          "<",
        );
    });

    // this  animation is under devises 768px
    mm.add("(max-width: 767px)", () => {
      const tl = gsap.timeline();
      tl.to(bodyContainerIntro.current, {
        opacity: 0,
        visibility: "hidden",
        display: "none",
        position: "absolute",
        top: "-125px",

        duration: 0.001,
      })
        .to(
          containerIntro.current,
          {
            width: "100%",
            height: "auto",

            duration: 2,
          },
          "<",
        )
        // animation imgae
        .to(itemsRef.current[0], {
          borderRadius: "9px",
          duration: 1,
        })
        // box under image
        .to(
          itemsRef.current[2],
          {
            height: "3rem",
            boxShadow: "0px 0px 10px 2px #000000",
          },
          "<",
        )
        .to(
          itemsRef.current[3],
          {
            display: "inline",
            opacity: 1,
            duration: 1,
          },
          "<",
        )
        .to(itemsRef.current[1], {
          width: "100%",
          height: "auto",
          display: "flex",
          opacity: 1,
          duration: 2,
        })
        .to(itemsRef.current[4], {
          display: "block",
          opacity: 1,
          duration: 1,
        });
    });
  };
  return (
    <>
      <div className="h-dvh w-full  md:flex md:flex-row-reverse grid grid-rows-2 grid-cols-1">
        {/* start intro */}
        <div
          ref={containerIntro}
          className=" overflow-hidden flex flex-col items-center   justify-center h-screen    md:h-screen! w-full   relative"
        >
          {/* container image */}
          <div className=" flex items-center flex-col justify-center  ">
            <span
              ref={(el) => (itemsRef.current[0] = el)}
              className="w-50 h-50  rounded-[50%] overflow-hidden shadow-[0px_0px_10px_2px_#000000]  inline-block"
            >
              <img src="/public/image/pictureMe.png" alt="" />
            </span>
            {/* shadow-[0px_0px_10px_2px_#000000] */}

            <div
              ref={(el) => (itemsRef.current[2] = el)}
              className="w-full flex text-[18px] font-bold text-[#bebebe] items-center justify-center  mt-5 md:hidden rounded-[9px] "
            >
              <span
                ref={(el) => (itemsRef.current[3] = el)}
                className="hidden opacity-0"
              >
                FrontEnd Developer
              </span>
            </div>
          </div>

          {/* body */}
          <div ref={bodyContainerIntro} className="">
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
        <div
          ref={(el) => (itemsRef.current[1] = el)}
          className="w-0   flex items-center overflow-hidden px-2"
        >
          <div
            ref={(el) => (itemsRef.current[4] = el)}
            className=" w-full text-gray-400   bg-gray-800 p-2  rounded-[9px] mb-12 hidden opacity-0"
          >
            <h1 className="text-[25px]">Hello, dear friends! 👋</h1>
            <p className="md:text-[1rem] text-[0.7rem]">
              Let’s get to introducing myself. My name is Abolfazl, I’m 20 years
              old, and I'm very interested in front-end development because I
              can bring what’s in my mind to life. I have a particular fondness
              for graphic designs. On the other hand, I also have a relatively
              good interest in back-end development because I want to build a
              website from start to finish, from front-end to back-end. When I
              entered the world of web design, I realized it's a huge and
              endless field. Within this world, creating 3D websites really
              caught my eye, and I became curious about how these websites are
              built, how they work, how they are rendered, and how the models
              used in them are created. That’s when I became familiar with
              Blender and started learning 3D modeling – what a fantastic field
              3D web design is! And further down, you can see my skills and what
              I’ve created with them. So, come along with me! 😊
            </p>
          </div>
        </div>
        <div></div>
      </div>
    </>
  );
}

export default SectionIntro;
