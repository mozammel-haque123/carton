import bubel from '../../assets/bubble.png'
import portal from '../../assets/portal.png'
import pill from '../../assets/pill.png'
import gun from '../../assets/gun.png'
import logo from '../../assets/logo.png'

import { FaRegCirclePlay } from 'react-icons/fa6';
import { useLocation } from 'react-router-dom';

const Bannar = () => {
  const location = useLocation()
    return (
        <div> 
          <div className='flex justify-center my-2'>
       <img src={logo} className='w-35' alt="" />  
          </div>
     
         <div className={location.pathname.startsWith('/ditails/') ? 'hidden' : `flex flex-col items-center justify-center my-10`}>
          <div className='relative'>
    {/* 1 line */}
    <div className='flex flex-col ff'>
      <h1 className='md:text-7xl text-5xl font-medium md:font-bold flex gap-4 text-white'> <img src={bubel} className='w-50 absolute -top-24 -left-26' alt="" /> <span className='italic'>THE</span> <img className='md:w-30 w-20' src={portal} alt="PORTAL" /> <span className='text-transparent bg-clip-text bg-gradient-to-r from-[#05fbff] to-[#00fc08]'>RICK & </span> <img src={pill} className='h-2 absolute right-0' alt="" /> </h1>
    <h1 className='md:text-7xl text-5xl md:font-bold font-medium flex text-transparent bg-clip-text bg-gradient-to-r from-[#05fbff] to-[#00fc08]'>MORTY <span className='italic mx-4 text-white'>WIKI </span></h1>  
    </div>

    <img className='md:w-50 md:h-60 w-30 absolute z-10 lg:-right-40 md:-right-28 md:top-0 -right-10 top-10' src={gun} alt="" /> 
          </div>

      <div className="flex flex-col-reverse md:flex-row md:justify-center md:items-center items-start justify-start gap-5 mr-40 md:mr-0 md:gap-20 md:mt-10 mt-20">
  <button className="flex items-center gap-2 bg-white dd py-2 px-4 rounded-2xl text-white">
    <FaRegCirclePlay /> Watch Now
  </button>

  <p className="text-cyan-300 text-sm md:text-left">
    Brilliant but boozy scientist Rick hijacks his fretful <br />
    teenage grandson, Morty, for wild escapades <br />
    in other worlds and alternate dimensions
  </p>
</div>


        </div></div>
      
    );
};

export default Bannar;