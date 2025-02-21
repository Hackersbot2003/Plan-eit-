import React from "react";
import group from "../assets/group.png";
import { Link } from "react-router-dom";
// header includes name of our website and basic componenets like feature,contact us

 const Navebar = () => {
    return (
      
        <div className=" top-0 left-0 w-full z-50 ">
            <div className=" w-[1538px] h-[60px] top-0 left-0">
                <div className="relative w-[1536px] h-[60px] bg-[#1b2a2f]">
                    <div className="absolute w-[122px] top-[12px] left-[58px] [font-family:'Source_Sans_Pro-SemiBold',Helvetica]  font-semibold text-white text-[32px] tracking-[0] leading-[normal] whitespace-nowrap">
                       <Link to={"/"}> Plan-eit!</Link>
                    </div>

                    <div className="flex w-[590px] h-5 items-start gap-[37px] absolute top-4 left-[473px]">
                        <div className="w-[90px] relative h-[30px] mt-[-1.00px] mb-[-9.00px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                           <Link to={"/"}> HOME</Link>
                        </div>

                        <div className="w-[138px] relative h-[30px] mt-[-1.00px] mb-[-9.00px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                            FEATURES
                        </div>

                        <div className="relative w-[141px] h-[30px] mt-[-1.00px] mb-[-9.00px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                        <Link to={"/About"}>    ABOUT US</Link>
                        </div>

                        <div className="relative w-[180px] h-[30px] mt-[-1.00px] mb-[-9.00px] mr-[-47.00px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-xl tracking-[0] leading-[normal]">
                            <Link to={'/contact'}>CONTACT US</Link>
                        </div>
                    </div>

                    <img
                        className="absolute w-[27px] h-[27px] top-4 left-[1457px]"
                        alt="Group"
                        src={group}
                    />
                </div>
            </div>
        </div>
    );
};
export default Navebar