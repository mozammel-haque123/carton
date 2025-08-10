// CardSlaider.jsx
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlaider = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  useEffect(() => {
    const load = async () => {
      try {
        const res = await fetch("https://rickandmortyapi.com/api/location");
        const json = await res.json();
        setData(json?.results || []);
      } catch (e) {
        setErr("Failed to load locations");
      } finally {
        setLoading(false);
      }
    };
    load();
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

  if (loading) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="h-28 rounded-xl bg-slate-800/60 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (err) {
    return <p className="text-red-400">{err}</p>;
  }

  return (
    <div className="bg-gray-900/40 p-6 rounded-2xl">
      <h2 className="text-white text-2xl font-bold mb-4">
        Locations
      </h2>

      <Slider {...settings}>
        {data.map((d, idx) => (
          <div key={d.id} className="px-2">
            <div className="group h-28 rounded-xl bg-slate-800/70 backdrop-blur border border-slate-700 hover:border-cyan-400/60 transition-all p-4 flex flex-col justify-between">
              <div>
                <p className="text-xs text-slate-300">
                  {d.type || "Unknown Type"}
                </p>
                <h3 className="text-white font-semibold line-clamp-1">
                  {d.name}
                </h3>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  Dim: {d.dimension?.replace("Dimension ", "") || "—"}
                </span>
                <span className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#05fbff] to-[#00fc08]">
                  S0{idx + 1}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlaider;
