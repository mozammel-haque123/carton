import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

const CardSlaider2 = () => {
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
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className={location.pathname.startsWith("/ditails/") ? "hidden" : `p-6 rounded-2xl`}>
      <div className="mt-10">
        <h2 className="text-white text-2xl font-bold mb-4">Locations</h2>

        <Slider {...settings}>
          {data.map((d, idx) => (
            <div key={d.id} className="px-2">
              <div className="relative group">
                {/* BORDER: SVG polygon (চারদিক বর্ডার, কোনো fill নেই) */}
          <div>
                  <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-sm"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  {/* শেপটা আগের মতোই: নিচের ডান দিকে কাটা/notch */}
                  <polygon
                    points="0,0 100,0 100,55 90,100 0,100"
                    fill="none"
                    stroke="rgb(127, 255, 206, 0.5)" /* cyan-300 approx */
                    strokeWidth="1"
                    className="group-hover:[stroke:rgb(59,130,246)]"
                  />
                </svg>
          </div>

                {/* CONTENT: transparent background, শুধু ক্লিপ-পাথ শেপ */}
                <div
                  className="relative rounded-lg overflow-hidden shadow-lg"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 100% 55%, 90% 100%, 0 100%)",
                    background: "transparent",
                  }}
                >
                  <div className="h-18 p-4 flex flex-col justify-between">
                    <p className="text-[11px] tracking-wide text-white/80">#{idx + 1}</p>
                    <h3 className="text-white font-semibold line-clamp-1">{d.name}</h3>
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

export default CardSlaider2;
