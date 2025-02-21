import React from "react";
import deposit1 from "../assets/deposit1.png";
import expedia41 from "../assets/Expedia.png";
import fromHiddenGemsToIconicEscapesGetPersonalizedTravelPlansTailoredJustForYouWithAiMagic1 from "../assets/back2.png";
import fromHiddenGemsToIconicEscapesGetPersonalizedTravelPlansTailoredJustForYouWithAiMagic31 from "../assets/background1.png";
import group2 from "../assets/group2.png";
import group3 from "../assets/group.png";
import group4 from "../assets/group4.png";
import group5 from "../assets/group5.png";
import group from "../assets/group.png";
import image from "../assets/group.png";
import image1 from "../assets/vector.svg";
import landingoagePhotodark1 from "../assets/landing.png";
import line1 from "../assets/line1.svg";
import line2 from "../assets/line2.svg";
import line3 from "../assets/line3.svg";
import line4 from "../assets/line4.svg";
import makemytripSeeklogo1 from "../assets/makemytrip-seeklogo1.png";
import pexelsPhotoByPixabay from "../assets/pexels1.png";
import pngwingCom11 from "../assets/pngwing.com11.png";
import pngwingCom1 from "../assets/pngwing.com1.png";
import vector2 from "../assets/vector.svg";
import vector11 from "../assets/vector11.png";
import yourImage from "../assets/yourImage2.png";
import image10 from "../assets/image10.png";
import Navebar from "../components/Navebar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    {/* Fixed Navbar */}
    <div className=" top-0 left-0 w-full z-50">
      <Navebar />
    </div>
    <div className="bg-[#e1e2dc] flex flex-row justify-center w-full">
      <div className="bg-[#e1e2dc] overflow-x-hidden w-[1536px] h-[5000px]relative">
        {/* Header Section */}
        <div
          className="absolute w-[1536px] h-[964px]  left-0  bg-[100%_100%]"
          style={{ backgroundImage: `url(${yourImage} )` }}
        >
          <div className="absolute w-[244px] h-[87px] top-[722px] left-[699px]">
            <div className="relative w-[242px] h-[87px] bg-[#1b2a2f] rounded-[25px]">
              <div className="absolute w-[180px] top-[21px] left-7 [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-3xl tracking-[0] leading-[normal]">
               <Link to={"/Ai"}>
               Plan Now
               </Link>
              </div>
            </div>
          </div>
          <img
            className="absolute w-[1007px] h-[447px] top-[210px] left-[265px]"
            alt="Landingoage"
            src={landingoagePhotodark1}
          />
        </div>

        {/* Introduction Section */}
        <div className="absolute w-[1082px] h-[503px]  top-[1209px] left-[228px]">
          <img
            className="absolute w-[415px] h-[277px] top-[120px] left-[598px] object-cover"
            alt="Pexels photo by"
            src={pexelsPhotoByPixabay}
          />
          <img
            className="top-0 left-[299px] absolute w-[781px] h-1"
            alt="Line"
            src={line1}
          />
          <img
            className="top-[503px] left-0 absolute w-[781px] h-1"
            alt="Line"
            src={line2}
          />
          <p className="absolute w-[505px] top-[116px] left-[85px] [font-family:'Tangerine-Regular',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
            <span className="[font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-normal text-black text-5xl tracking-[0]">
              Effortlessly
            </span>
            <span className="[font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold">
              {" "}
              PLAN
              <br />
              The Perfect Trip
              <br />
              Just For You!
            </span>
          </p>
        </div>

        {/* Why Choose Us Section */}
        <div className="absolute w-[1538px] h-[770px] top-[1914px] left-0">
          <p className="absolute w-[500px] top-0 left-[518px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-normal text-black text-7xl tracking-[0] leading-[normal] whitespace-nowrap">
            <span className="font-bold">Why</span>
            <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica]">
              {" "}
              Choose Us?
            </span>
          </p>
          <div className="absolute w-[185px] h-[237px] top-[209px] left-[1057px]">
            <div className="absolute w-[181px] top-[110px] left-0 [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-md text-center tracking-[0] leading-[normal]">
              A.I. Powered Trip Planning
            </div>
            <div className="absolute w-20 h-20 top-0 left-[47px] bg-[#1a2f32] rounded-[50%] flex items-center justify-center">
  <div className="[font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-[#e1e2dc] text-[39px] tracking-[0] leading-[normal] whitespace-nowrap">
    AI
  </div>
</div>
          </div>
          <div className="absolute w-[183px] h-[237px] top-[209px] left-[567px]">
            <div className="absolute w-[181px] top-[110px] left-0 [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-md text-center tracking-[0] leading-[normal]">
              Instant Hassle Free Planning
            </div>
            <div className="absolute w-20 h-20 top-0 left-[38px] bg-[#1a2f32] rounded-[50%] flex items-center justify-center">
              <img
                className="w-[50%] h-[50%] object-contain" // Adjust size and object-fit as needed
                alt="Vector"
                src={image10}
              />
            </div>
          </div>
          <div className="absolute w-[203px] h-[233px] top-[209px] left-[312px]">
            <p className="absolute w-[201px] top-[106px] left-0 [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-md text-center tracking-[0] leading-[normal]">
              All Your Documents At A Single Place
            </p>
            <div className="absolute w-20 h-20 top-0 left-[31px] bg-[#1a2f32] rounded-[50%] flex items-center justify-center">
  <img
    className="w-[38px] h-10" // Adjust size as needed
    alt="Vector"
    src={vector11}
  />
</div>
          </div>
          <div className="absolute w-[203px] h-[233px] top-[209px] left-[802px]">
            <p className="absolute w-[201px] top-[106px] left-0 [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-md text-center tracking-[0] leading-[normal]">
              Split Total Expense Between Friends
            </p>
            <div className="absolute w-20 h-20 top-0 left-16 bg-[#1a2f32] rounded-[50%]">
              <img
                className="absolute w-11 h-[41px] top-5 left-5"
                alt="Group"
                src={group2}
              />
            </div>
          </div>
          <img
            className="absolute w-[1536px] h-[317px] top-[453px] left-0"
            alt="From hidden gems to"
            src={
              fromHiddenGemsToIconicEscapesGetPersonalizedTravelPlansTailoredJustForYouWithAiMagic1
            }
          />
        </div>

        {/* Vehicle Rentals Section */}
        <div className="absolute w-[1142px] h-[495px] top-[2904px] left-[126px]">
          <p className="absolute w-[453px] top-[93px] left-[688px] [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
            <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-5xl tracking-[0]">
              Get In{" "}
            </span>
            <span className="[font-family:'Tangerine-Regular',Helvetica]">
              Touch
            </span>
            <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-5xl tracking-[0]">
              {" "}
              <br />
              With The{" "}
            </span>
            <span className="underline">Best</span>
            <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-5xl tracking-[0]">
              {" "}
              Vehicle Rentals
            </span>
          </p>
          <img
            className="absolute w-[538px] h-[276px] top-[90px] left-0"
            alt="From hidden gems to"
            src={
              fromHiddenGemsToIconicEscapesGetPersonalizedTravelPlansTailoredJustForYouWithAiMagic31
            }
          />
          <div className="w-[277px] left-[738px] absolute h-[34px] top-0">
           
            <img
              className="w-[200px] left-[175px] absolute h-[34px] top-0"
              alt="Group"
              src={group4}
            />
           
          </div>
          <div className="absolute w-[168px] h-[62px] top-[433px] left-[542px]">
            <div className="relative w-[166px] h-[62px] bg-[#1b2a2f] rounded-[18.75px]">
              <div className="absolute w-[79px] top-3.5 left-11 [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-[27px] text-center tracking-[0] leading-[normal]">
               <Link to={'/rent'}>
               VIEW</Link>
              </div>
            </div>
          </div>
        </div>

        {/* Price Comparison Section */}
        <div className="absolute w-[1214px] h-[956px] top-[3617px] left-[156px]">
          <div className="absolute w-[1214px] h-[799px] top-0 left-0">
            <div className="absolute w-[800px] top-0 left-[242px] [font-family:'Source_Sans_Pro-SemiBold',Helvetica] font-semibold text-black text-3xl tracking-[0] leading-[normal]">
              Compare Prices Between Platforms
            </div>
            <div className="flex w-[1212px] h-24 items-center justify-center gap-[81px] absolute top-[138px] left-0">
              <img
                className="relative w-[221.4px] h-[55.9px] object-cover"
                alt="Expedia"
                src={expedia41}
              />
              <img
                className="relative w-[175.78px] h-[55.9px] object-cover"
                alt="Makemytrip seeklogo"
                src={makemytripSeeklogo1}
              />
              <img
                className="relative w-[170.1px] h-[95.68px] object-cover"
                alt="Pngwing com"
                src={pngwingCom1}
              />
              <img
                className="relative w-[329.59px] h-[55.9px] object-cover"
                alt="Pngwing com"
                src={pngwingCom11}
              />
            </div>
            <img
              className="absolute w-[309px] h-[309px] top-[490px] left-[147px] object-cover"
              alt="Deposit"
              src={deposit1}
            />
          </div>
          <div className="absolute w-[566px] h-[536px] top-[419px] left-[614px]">
            <p className="absolute w-[562px] top-0 left-0 [font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-7xl tracking-[0] leading-[normal]">
              <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-7xl tracking-[0]">
                Introducing !<br />
                Trip{" "}
              </span>
              <span className="[font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold">
                Expense
                <br />
              </span>
              <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica] font-normal text-black text-7xl tracking-[0]">
                Splitter.
              </span>
            </p>
            <p className="absolute w-[562px] top-[311px] left-0 [font-family:'Source_Sans_Pro-Light',Helvetica] font-normal text-black text-[45px] tracking-[0] leading-[normal]">
              <span className="font-light">
                less calculations,
                <br />
                more
              </span>
              <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica]">
                &nbsp;
              </span>
              <span className="[font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold">
                fun
              </span>
            </p>
            <div className="absolute w-[168px] h-[62px] top-[475px] left-1">
              <div className="relative w-[166px] h-[62px] bg-[#1b2a2f] rounded-[18.75px]">
                <div className="absolute w-[111px] top-3.5 left-[20px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-[25px] text-center tracking-[0] leading-[normal]">
                 <Link to={"/Splite"}>
                 EXPLORE
                 </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* AI Customer Support Section */}
        <div className="absolute w-[1082px] h-[503px] top-[4659px] left-[228px]">
          <p className="absolute w-[562px] top-[116px] left-[71px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-normal text-black text-5xl tracking-[0] leading-[normal]">
            <span className="font-bold">Artificial</span>
            <span className="[font-family:'Source_Sans_Pro-Regular',Helvetica]">
              <br/>
              Intelligence
              <br/> Customer Support
            </span>
          </p>
          <div className="absolute w-[168px] h-[62px] top-[307px] left-[881px]">
            <div className="relative w-[166px] h-[62px] bg-[#1b2a2f] rounded-[18.75px]">
              <div className="absolute w-[79px] top-3.5 left-[43px] [font-family:'Source_Sans_Pro-Bold',Helvetica] font-bold text-white text-[27px] text-center tracking-[0] leading-[normal]">
                VIEW
              </div>
            </div>
          </div>
          <img
            className="absolute w-[94px] h-[104px] top-[116px] left-[942px]"
            alt="Vector"
            src={vector2}
          />
          <img
            className="top-0 left-[299px] absolute w-[781px] h-1"
            alt="Line"
            src={line3}
          />
          <img
            className="top-[503px] left-0 absolute w-[781px] h-1"
            alt="Line"
            src={line4}
          />
        </div>
        <Footer/>
      </div>
    </div>
    
    </>
  );
};

export default Home;
