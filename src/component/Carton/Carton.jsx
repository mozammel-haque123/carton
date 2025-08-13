import { Link, useLoaderData } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carton = () => {
  const loaderData = useLoaderData();
  const list = loaderData?.results ?? [];

  const settings = {
    dots: false,
    infinite: false, // <-- গুরুত্বপূর্ণ
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 640,  settings: { slidesToShow: 2 } },
      { breakpoint: 480,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="px-6">
      {/* disabled arrow hide করার CSS */}
      <style>{`
        .slick-arrow.slick-disabled { 
          display: none !important; 
        }
      `}</style>

      <h2 className="text-white text-2xl font-bold mb-4">Meet The Cast</h2>
      <Slider {...settings}>
        {list.map((c) => (
          <Link to={`/ditails/${c.id}`}>     <div key={c?.id} className="px-2" >
<div className="relative group">
  {/* BORDER: SVG polygon (transparent fill + visible stroke) */}
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none rounded-sm"
    viewBox="0 0 100 100"
    preserveAspectRatio="none"
  >
    <polygon
      points="0,0 100,0 100,85 80,100 0,100"
      fill="none"
      stroke="rgb(127, 255, 206, 0.5)"   /* cyan-300 */
      className="group-hover:[stroke:rgb(59,130,246)]"
      /* blue-500 on hover */
    />
  </svg>

  {/* CONTENT: clipped to the same shape, no background */}
  <div
    className="relative rounded-lg overflow-hidden shadow-lg"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)",
      background: "transparent"
    }}
  >
    <img
      src={c?.image}
      alt={c?.name || "character"}
      className="w-full h-50 p-4"
    />
    <p className="text-white py-2 p-6">{c?.name}</p>
  </div>
</div>




          </div></Link>
     
        ))}
      </Slider>
    </div>
  );
};

export default Carton;
