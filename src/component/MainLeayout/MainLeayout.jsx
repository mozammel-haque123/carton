import { Outlet } from "react-router-dom";
import Bannar from "../Bannar/Bannar";
import bac from '../../assets/Background.png'
import CardSlaider from "../CardSlaider/CardSlaider";

const MainLeayout = () => {
    return (
        <div className="w-11/12 mx-auto border" style={{background:(`url(${bac})`),width:'100%',} }>
        <Bannar></Bannar>
        <Outlet></Outlet>
        <CardSlaider></CardSlaider>
        </div>
    );
};

export default MainLeayout;