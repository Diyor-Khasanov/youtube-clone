import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchApi } from "../redux/api";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

const Section = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const { images, isLoading, err } = useSelector(
    (state) => state.imageApp
  );

  useEffect(() => {
    dispatch(fetchApi());
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/vid/${id}`)
  }

  if (isLoading) {
    return <Loading />;
  }

  if (err) {
    return <h2 className="text-center text-red-600 mt-10 font-bold">{err}</h2>;
  }

  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-6 gap-4 md:gap-8 lg:gap-10">
      {images.flat().map((img) => (
        <button
          key={img.id}
          onClick={() => handleNavigate(img.id)}
          className="w-full group focus:outline-none"
        >
          <div className="hover:bg-red-50 p-3 md:p-4 rounded-2xl duration-300 cursor-pointer transition-all h-full shadow-sm hover:shadow-md border border-transparent hover:border-red-100">
            <div className="overflow-hidden rounded-xl h-[200px] sm:h-[220px] md:h-[250px] lg:h-[280px]">
              <img
                src={img.image}
                alt={img.name}
                className="w-full h-full object-cover rounded-xl group-hover:scale-105 duration-500"
              />
            </div>

            <div className="text-start mt-3">
              <h1 className="font-bold text-base md:text-lg text-gray-800 line-clamp-1">
                {img.name}
              </h1>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-gray-500 text-sm italic">Meal Type</p>
                <span className="bg-red-100 text-red-600 text-xs font-medium px-2.5 py-0.5 rounded-full">
                  {img.mealType[0]}
                </span>
              </div>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
};

export default Section;
