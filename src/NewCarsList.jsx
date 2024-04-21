import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { findFlagUrlByCountryName } from "country-flags-svg";

const CarsList = () => {
  const [error, setError] = useState(null);
  const [cars, setCars] = useState([]);
  const [sortBy, setSortBy] = useState("price-reverse");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [seeAll, setSeeAll] = useState(false);

  const formatWithSpaces = (number) => {
    if (number >= 10000) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return number.toString();
  };

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_FULL_URL)
      .then(({ data }) => setCars(data.data))
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }

  const VITE_BASE_URL = import.meta.env.VITE_BASE_URL;

  const sortCars = (cars) => {
    const sortedCars = [...cars];

    if (sortBy === "price") {
      sortedCars.sort((a, b) => a.attributes.price - b.attributes.price);
    } else if (sortBy === "price-reverse") {
      sortedCars.sort((a, b) => b.attributes.price - a.attributes.price);
    } else if (sortBy === "year") {
      sortedCars.sort((a, b) => a.attributes.year - b.attributes.year);
    } else if (sortBy === "year-reverse") {
      sortedCars.sort((a, b) => b.attributes.year - a.attributes.year);
    } else if (sortBy === "name") {
      sortedCars.sort((a, b) =>
        a.attributes.title.localeCompare(b.attributes.title)
      );
    } else if (sortBy === "name-reverse") {
      sortedCars.sort((a, b) =>
        b.attributes.title.localeCompare(a.attributes.title)
      );
    }

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return sortedCars;
  };

  const itemsPerPage = seeAll
    ? cars.length
    : windowWidth < 888
    ? 3
    : cars.length;

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="grid grid-cols-1 gap-8 lg:mx-auto lg:grid-cols-2 2xl:grid-cols-3 xxl:grid-cols-4">
        {sortCars(cars)
          .slice(0, itemsPerPage)
          .map(({ id, attributes }) => (
            <Link
              to={`/cars/${id}`}
              key={id}
              className="justify-self-center w-[90%] max-w-[600px] lg:max-w-[450px] hover:border-4 border-[#1D976C] rounded-[9px] box-border transition-all duration-300 ease-in-out shadow-2xl"
            >
              <div className="rounded-t-[5px]">
                <img
                  className="rounded-t-[5px] w-full"
                  src={`http://localhost:1337${attributes.Images.data[0]?.attributes?.url}`}
                  alt="Thumbnail"
                />
              </div>
              <div className="">
                <div className="bg-[#484848] p-4">
                  <div className="h-full flex items-center justify-center">
                    <p className="font-mukta font-bold text-3xl text-[#F9F4F5]">
                        {attributes.Mark} {attributes.Model}
                    </p>
                  </div>
                </div>
                <div className="w-full bg-[#484848] flex items-center justify-center gap-3 pb-4 rounded-b-[5px]">
                  <p className="font-mukta font-bold text-xl text-[#F9F4F5]">
                    {attributes.Owner}
                  </p>
                  <img src={findFlagUrlByCountryName(attributes.Country)} className="h-4" alt="Flag of the country of the owner" />
                </div>
              </div>
            </Link>
          ))}
        {windowWidth < 888 && !seeAll && (
          <div className="w-full flex items-center justify-center mb-8">
              <button
                className="text-[#343434] text-2xl font-bold bg-[#F9F4F5] rounded-[5px] flex flex-col items-center p-4 w-[80%] max-w-[24rem] hover:bg-[#1D976C] hover:text-[#F9F4F5] transition duration-300 ease-in-out"
                onClick={() => setSeeAll(true)}
              >
                See All
              </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CarsList;
