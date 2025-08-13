import { Outlet, useLocation } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import bac from '../../assets/Background.png'
import CardSlaider1 from "../CardSlaider1/CardSlaider1";
import CardSlaider2 from "../CardSlaider2/CardSlaider2";
import spiral from '../../assets/spiral.png'
import str from '../../assets/star.png'
const MainLeayout = () => {
    const location = useLocation()
      const isDetails =
    location.pathname.startsWith("/details/") ||
    location.pathname.startsWith("/ditails/");
    return (
        <div className="w-11/12 mx-auto relative">
               <div
      className={`w-full h-[500px] ${isDetails ? "" : "bg-cover bg-center bg-no-repeat"}`}
      style={{
        backgroundImage: isDetails ? "none" : `url(${bac})`,
        width: "100%",
        height: "500px",
      }}
    >
              <Bannar></Bannar>
        <Outlet></Outlet>   
            </div>
        <div className=" mb-20" style={{background:(`url(${spiral})`), backgroundRepeat:'no-repeat', backgroundPosition:'right'} }>
   
     <div className=""> <CardSlaider1></CardSlaider1></div>
    <CardSlaider2></CardSlaider2> 
          
        </div>
       <div className={location.pathname.startsWith("/ditails/") ? "hidden" : `absolute top-190 w-full  rotate-180 -z-50`}>
       <img src={str} className="w-full h-90 " alt="" />
      </div>
        </div>
    );
};

export default MainLeayout;