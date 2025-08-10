import { useLoaderData } from "react-router-dom";

const CartonDetails = () => {
  const data = useLoaderData();

  return (
    <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 min-h-screen text-white p-8 border ">
      <div className="w-10/12 mx-auto space-y-6 border flex flex-col md:flex-row justify-center md:h-screen items-center gap-4">
        {/* Name & Image */}
        <div className="md:w-5/12  border flex flex-col justify-center items-center gap-4">
            <h1 className="text-3xl font-bold text-cyan-400">{data.name}</h1>
          <img
            src={data.image}
            alt={data.name}
            className="md:w-65 w-full h-60 rounded-lg shadow-lg border  p-6  border-green-200 bg-white b"
          />
    
        </div>

        <div className="border h-50 border-emerald-200 hidden md:block"></div>

        {/* Status, Species, Gender */}
        <div className="md:w-6/12 border space-y-6 w-full">
        <div className="flex">
          <div className="p-4 bg-gray-800 rounded-lg shadow w-full border">
            <p className="text-gray-400">Status</p>
            <p className="text-lg font-semibold">{data.status}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow w-full border">
            <p className="text-gray-400">Species</p>
            <p className="text-lg font-semibold">{data.species}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow w-full border">
            <p className="text-gray-400">Gender</p>
            <p className="text-lg font-semibold">{data.gender}</p>
          </div>
        </div>

        {/* Origin & Location */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-800 rounded-lg shadow border">
            <p className="text-gray-400">Origin</p>
            <p className="text-lg font-semibold">{data.origin.name}</p>
          </div>
          <div className="p-4 bg-gray-800 rounded-lg shadow border">
            <p className="text-gray-400">Last Known Location</p>
            <p className="text-lg font-semibold">{data.location.name}</p>
          </div>
        </div>

              {/* Episodes */}
        <div className="p-4 bg-gray-800 rounded-lg shadow border">
          <p className="text-gray-400 mb-2">Episodes(s)</p>
         <ul>
        <li>Pilot</li>
        <li>Lawnmower Dog</li>
        <li>Anatomy Park</li>
        <li>M. Night Shaym-Aliens!</li>
        <li>Meeseeks And Deetroy</li>
         </ul>
        </div>
        </div>

  
      </div>
    </div>
  );
};

export default CartonDetails;
