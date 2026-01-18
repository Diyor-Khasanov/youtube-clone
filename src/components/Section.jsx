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
    return <h2>{err}</h2>;
  }

  return (
    <section className="grid grid-cols-3 p-6 gap-10">
      {images.flat().map((img) => (
        <button key={img.id} onClick={() => handleNavigate(img.id)}>
          <div className="hover:bg-red-100 p-4 rounded-xl duration-300 cursor-pointer">
            <img
              src={img.image}
              alt={img.name}
              className="w-full h-[290px] object-cover rounded-lg "
            />
            <div className="text-start mt-2">
              <h1 className="font-semibold text-lg text-start">{img.name}</h1>
              <p className="text-red-400 text-md">Meal Type: {img.mealType[0] }</p>
            </div>
          </div>
        </button>
      ))}
    </section>
  );
};

export default Section;
