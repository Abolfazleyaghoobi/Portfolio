function SectionIntro() {
    return ( 
        <>
        <div className="h-screen w-full bg-[#111621]">

            {/* start intro */}
            <div className="z-10 flex flex-col items-center justify-center h-screen w-full ">

                {/* container image */}
                <div className="">
                    <span className="w-50 h-50 rounded-[50%] overflow-hidden shadow-[0px_0px_10px_2px_#000000] inline-block -mt-40">
                        <img src="/public/image/pictureMe.png" alt="" />
                    </span>
                </div>

                    <p className="text-white">

                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugiat voluptatem sed molestias maiores recusandae et placeat necessitatibus exercitationem amet accusamus quasi reprehenderit consectetur at aspernatur adipisci quidem ducimus minima?
                    </p>
                
            </div>
            {/*  */}


        </div>
        </>
     );
}

export default SectionIntro;