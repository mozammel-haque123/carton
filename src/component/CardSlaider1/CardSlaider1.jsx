import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

const CardSlaider1 = () => {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then((res) => res.json())
      .then((apiData) => {
        setData(apiData.results || []);
      });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    variableWidth: true, 
  };

  return (
    <div className={location.pathname.startsWith("/ditails/") ? "hidden" : `p-6 rounded-2xl mt-60  md:mt-36`}>
      <div className="mt-4">
        <h2 className="text-white text-2xl font-bold mb-4">Locations</h2>

        <Slider {...settings}>
          {data.map((d, idx) => (
            <div key={d.id} className="px-2" style={{ width: "clamp(180px, 22vw, 260px)" }}>
              <div className="relative group">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-sm"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 100,0 100,55 90,100 0,100"
                    fill="none"
                    stroke="rgb(127, 255, 206, 0.5)"
                    className="group-hover:[stroke:rgb(59,130,246)]"
                  />
                </svg>

                <div
                  className="relative rounded-lg overflow-hidden shadow-lg"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)",
                    background: "transparent",
                  }}
                >
                  <div className="h-18 p-4 flex flex-col justify-between">
                    <p className="text-[11px] tracking-wide text-white/80">S01 E0{idx + 1}</p>
                    <h3 className="text-white font-semibold line-clamp-1">{d.type}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default CardSlaider1;
