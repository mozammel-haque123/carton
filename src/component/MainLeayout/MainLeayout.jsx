import { Outlet } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import bac from '../../assets/Background.png'
import CardSlaider1 from "../CardSlaider1/CardSlaider1";
import CardSlaider2 from "../CardSlaider2/CardSlaider2";

const MainLeayout = () => {
    return (
        <div className="w-11/12 mx-auto border">
            <div style={{background:(`url(${bac})`),width:'100%',} }>
              <Bannar></Bannar>
        <Outlet></Outlet>   
            </div>
        <CardSlaider1></CardSlaider1>
        <CardSlaider2></CardSlaider2>
        </div>
    );
};

export default MainLeayout;