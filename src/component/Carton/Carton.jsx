import { Link, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carton = () => {
  const loaderData = useLoaderData();
  const list = loaderData?.results ?? [];

  const settings = {
    dots: false,
    infinite: false,    
    speed: 500,
    arrows: true,
    slidesToScroll: 1,
    swipeToSlide: true, 
    variableWidth: true, 
  };

  return (
    <div className="px-6">
      <style>{`
        .slick-arrow.slick-disabled { 
          display: none !important; 
        }
      `}</style>

      <h2 className="text-white text-2xl font-bold mb-4">Meet The Cast</h2>

      <Slider {...settings}>
        {list.map((c) => (
          <Link key={c?.id} to={`/ditails/${c?.id}`} className="block">
            <div className="px-2" style={{ width: "clamp(180px, 22vw, 260px)" }}>
              <div className="relative group">
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none rounded-sm"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                >
                  <polygon
                    points="0,0 100,0 100,85 80,100 0,100"
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
                  <img
                    src={c?.image}
                    alt={c?.name || "character"}
                    className="w-full h-[200px] object-cover p-4 select-none"
                    draggable="false"
                  />
                  <p className="text-white py-2 px-6">{c?.name}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carton;
