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
    <div className="p-6">
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
<div className="group">
  {/* OUTER: border layer */}
  <div
    className="rounded-lg p-[2px] bg-cyan-300 transition-colors duration-300 group-hover:bg-blue-500"
    style={{
      clipPath: "polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)"
    }}
  >
    {/* INNER: content layer */}
    <div
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
      style={{
        clipPath: "polygon(0 0, 100% 0, 100% 85%, 80% 100%, 0 100%)"
      }}
    >
      <img
        src={c?.image}
        alt={c?.name || "character"}
        className="w-full h-50"
      />
      <p className="text-white text-center py-2  p-6  border-green-200 bg-white b">{c?.name}</p>
    </div>
  </div>
</div>


          </div></Link>
     
        ))}
      </Slider>
    </div>
  );
};

export default Carton;
