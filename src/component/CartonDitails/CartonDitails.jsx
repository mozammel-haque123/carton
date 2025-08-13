import { useLoaderData } from "react-router-dom";
import statas from '../../assets/status.png';
import special from '../../assets/species.png';
import gendar from '../../assets/gender.png';
import origin from '../../assets/origin.png';
import location from '../../assets/location.png';
import carton  from '../../assets/background8.png';
import redaxc from '../../assets/redirect.png'
import str from '../../assets/star.png'

const CartonDetails = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen text-white p-8">
      <div className="w-12/12 mx-auto space-y-6 flex flex-col md:flex-row justify-between md:h-screen items-center relative" style={{
  backgroundImage: `url(${carton})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover', 
  backgroundPosition: 'center' 
}}>

        <div>

        </div>
        <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold text-cyan-400">{data.name}</h1>
          <img
            src={data.image}
            alt={data.name}
            className="md:w-65 w-full h-60 rounded-lg shadow-lg  border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]  p-6  border-green-200 bg-white b"
          />
    
        </div>

        <div className="border h-50 border-emerald-300 hidden md:block"></div>

        <div className="md:w-6/12 space-y-6 w-full">
        <div className="flex gap-6">
         <div
  className="
    p-4 rounded-lg shadow w-full
    border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]
  "
>
            <img className="w-8" src={statas} alt="statas" />
            <p className="text-gray-400 text-sm">Status</p>
            <p className="text-lg font-semibold">{data.status}</p>
          </div>
         <div
  className="
    p-4 rounded-lg shadow w-full
    border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]
  "
>
            <img className="w-8" src={special} alt="special" />
            <p className="text-gray-400 text-sm">Species</p>
            <p className="text-2xl font-semibold">{data.species}</p>
          </div>
          <div
  className="
    p-4 rounded-lg shadow w-full
    border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]
  "
>
             <img className="w-8" src={gendar} alt="gendar" />
            <p className="text-gray-400 text-sm">Gender</p>
            <p className="text-2xl font-semibold">{data.gender}</p>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="p-4 rounded-lg shadow  border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]">
             <img className="w-8" src={origin} alt="origin" />
            <p className="text-gray-400 text-sm">Origin</p>
            <div className="flex justify-between">
           <p className="text-2xl font-semibold">{data.origin.name}</p> 
              <img className="w-5 h-5" src={redaxc} alt="redaxc" />   
            </div>
     
          </div>
          <div className="p-4 rounded-lg shadow  border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]">
             <img className="w-8" src={location} alt="location" />
            <p className="text-gray-400 text-sm">Last Known Location</p>
            <div className="flex justify-between">
             <p className="text-2xl font-semibold">{data.location.name}</p>   
             <img className="w-5 h-5" src={redaxc} alt="redaxc" />
            </div>
          
          </div>


            <div className="p-4 rounded-lg shadow  border-2 border-solid border-transparent
    [border-image:linear-gradient(90deg,rgba(5,251,255,.20),rgba(0,252,8,.20))_1]
    hover:[border-image:linear-gradient(90deg,rgba(59,130,246,.6),rgba(34,197,94,.6))_1]">
              
<svg
  width="32"
  height="32"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg"
>
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{ stopColor: "#05fbff" }} />
      <stop offset="100%" style={{ stopColor: "#00fc08" }} />
    </linearGradient>
  </defs>
  <path
    fill="url(#grad1)"
    d="M3 6h18v2H3V6zm0 5h18v2H3v-2zm0 5h18v2H3v-2z"
  />
</svg>



          <p className="text-gray-400 mb-2 text-sm">Episodes(s)</p>
         <ul className="list-disc text-2xl font-semibold px-4">
        <li>Pilot</li>
        <li>Lawnmower Dog</li>
        <li>Anatomy Park</li>
        <li>M. Night Shaym-Aliens!</li>
        <li>Meeseeks And Deetroy</li>
         </ul>
        </div>
        </div>

      
        </div>

  <div className="absolute">
    <img src={str} alt="carton" />
  </div>
      </div>
    </div>
  );
};

export default CartonDetails;
