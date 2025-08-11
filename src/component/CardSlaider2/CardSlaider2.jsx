import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useLocation } from "react-router-dom";

const CardSlaider2 = () => {
    const location = useLocation()
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/location")
      .then(res => res.json())
      .then(apiData => {
        setData(apiData.results || []); // এখন data সবসময় array
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
    <div className={location.pathname.startsWith('/ditails/') ? 'hidden' : `bg-gray-900/40 p-6 rounded-2xl`}>
      <h2 className="text-white text-2xl font-bold mb-4">Locations</h2>

      <Slider {...settings}>
        {data.map((d, idx) => (
     <div key={d.id} className="px-2">
  {/* BORDER LAYER */}
  <div
    className="
      bg-gradient-to-r from-green-400 to-cyan-400
      transition
      [--notch:28px]
      [clip-path:polygon(0_0,100%_0,100%_calc(100%-var(--notch)),calc(100%-var(--notch))_100%,0_100%)]
    "
  >
    {/* CONTENT LAYER */}
    <div
      className="
        bg-gray-800/90
         h-18 
        p-4 flex flex-col justify-between
        [clip-path:polygon(0_0,100%_0,100%_calc(100%-var(--notch)),calc(100%-var(--notch))_100%,0_100%)]
      "
    >
      <p className="text-[11px] tracking-wide text-white/80">#{idx + 1}</p>
      <h3 className="text-white font-semibold line-clamp-1">{d.name}</h3>
    </div>
  </div>
</div>

        ))}
      </Slider>
    </div>
  );
};

export default CardSlaider2;
