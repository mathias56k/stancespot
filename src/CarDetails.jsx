import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Counter from "yet-another-react-lightbox/plugins/counter";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/counter.css";

import { findFlagUrlByCountryName } from "country-flags-svg";

import { FaTiktok } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { AiOutlineYoutube } from "react-icons/ai";

import { BlocksRenderer } from '@strapi/blocks-react-renderer';


import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

const CarDetails = () => {
  const { id } = useParams();
  const [carDetails, setCarDetails] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  const toggleOpen = (state) => () => setOpen(state);

  const updateIndex = ({ index: current }) => setIndex(current);

  const formatWithSpaces = (number) => {
    if (number >= 10000) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return number.toString();
  };

  useEffect(() => {
  const fetchCarDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:1337/api/cars/${id}?populate=*`
      );
      const details = response.data.data;
      setCarDetails(details);

      if (details.attributes && details.attributes.Images && details.attributes.Images.data) {
        const imageUrls = details.attributes.Images.data.map((image) => ({
          src: 'http://localhost:1337' + image.attributes.url,
        }));

        console.log("Image URLs:", JSON.stringify(imageUrls, null, 2));

        setSlides(imageUrls);
      } else {
        setSlides([]);
      }
    } catch (error) {
      console.error("Error fetching listing details:", error);
      setCarDetails(null);
    }
  };

  fetchCarDetails();
}, [id]);


  return (
    <>
      <div className="flex flex-col items-center relative">
        {carDetails ? (
          <div className="w-full flex flex-col justify-center items-center text-[#F9F4F5] font-medium">
            <div className="w-[90%] flex flex-col justify-center items-center max-w-[50rem]">
              <Lightbox
                styles={{
                  container: { borderRadius: "5px", cursor: "zoom-in"},
                  navigationPrev: {
                    color: "#F9F4F5",
                    fontSize: "3rem",
                    marginLeft: "-1rem",
                  },
                  navigationNext: {
                    color: "#F9F4F5",
                    fontSize: "3rem",
                    marginRight: "-1rem",
                  },
                }}
                index={index}
                slides={slides}
                plugins={[Inline, Counter]}
                counter={{
                  container: {
                    style: { top: "unset", bottom: -10, left: "44%" },
                  },
                }}
                on={{
                  view: updateIndex,
                  click: toggleOpen(true),
                }}
                carousel={{
                  padding: 0,
                  spacing: 0,
                  imageFit: "cover",
                  finite: true,
                }}
                inline={{
                  style: {
                    width: "100%",
                    maxWidth: "46rem",
                    aspectRatio: "3 / 2",
                    margin: "0 0",
                  },
                }}
                render={{
                  iconPrev: () => <IoIosArrowBack />,
                  iconNext: () => <IoIosArrowForward />,
                }}
              />
              <Lightbox
                styles={{
                  container: { backgroundColor: "#343434" },
                  navigationPrev: { color: "#F9F4F5", fontSize: "3rem" },
                  navigationNext: { color: "#F9F4F5", fontSize: "3rem" },
                }}
                open={open}
                close={toggleOpen(false)}
                index={index}
                slides={slides}
                plugins={[Zoom, Counter]}
                on={{ view: updateIndex }}
                animation={{ zoom: 500 }}
                zoom={{
                  maxZoomPixelRatio: 3,
                  zoomInMultiplier: 2,
                  doubleTapDelay: 300,
                  doubleClickDelay: 300,
                  doubleClickMaxStops: 2,
                  keyboardMoveDistance: 50,
                  wheelZoomDistanceFactor: 100,
                  pinchZoomDistanceFactor: 100,
                  scrollToZoom: false,
                }}
                controller={{
                  closeOnPullDown: true,
                  closeOnBackdropClick: true,
                }}
                noScroll={{ disabled: true }}
                carousel={{ finite: true }}
                render={{
                  iconPrev: () => <IoIosArrowBack />,
                  iconNext: () => <IoIosArrowForward />,
                }}
              />
              <div className="text-[1.2rem] mt-8 flex justify-between w-[90%]">
                <p className="">Mark</p>
                <p className="text-right font-normal">{carDetails.attributes.Mark}</p>
              </div>
              <hr className="h-[1px] rounded-full w-[90%] bg-[#484848] border-0 my-2" />
              <div className="text-[1.2rem] flex justify-between w-[90%]">
                <p className="">Model</p>
                <p className="text-right font-normal">{carDetails.attributes.Model}</p>
              </div>
              <hr className="h-[1px] rounded-full w-[90%] bg-[#484848] border-0 my-2" />
              <div className="text-[1.2rem] flex justify-between w-[90%]">
                <p className="">Year</p>
                <p className="text-right font-normal">{carDetails.attributes.Year}</p>
              </div>
              <hr className="h-[1px] rounded-full w-[90%] bg-[#484848] border-0 my-2" />
              <div className="text-[1.8rem] flex flex-col justify-center items-center w-[90%] my-6">
                <div className="w-full flex items-center justify-center gap-4">
                  <p className="text-right font-normal">{carDetails.attributes.Owner}</p>
                  <img src={findFlagUrlByCountryName(carDetails.attributes.Country)} className="h-5" alt="Flag of the country of the owner" />
                </div>
                <div className="flex items-center justify-around gap-6 mt-2">
                  {carDetails.attributes.Tiktok && (
                    <a href={`https://www.tiktok.com/@${carDetails.attributes.Tiktok}/`} target="_blank">
                      <FaTiktok className="w-[1.5rem] h-[1.5rem] hover:fill-[#1D976C]"/>
                    </a>
                  )}
                  {carDetails.attributes.Youtube && (
                    <a href={`https://www.youtube.com/@${carDetails.attributes.Youtube}/`} target="_blank">
                      <AiOutlineYoutube className="w-[2.25rem] h-[2.25rem] hover:fill-[#1D976C]"/>
                    </a>
                  )}
                  {carDetails.attributes.Instagram && (
                    <a href={`https://www.instagram.com/${carDetails.attributes.Instagram}/`} target="_blank">
                      <GrInstagram className="w-[1.5rem] h-[1.5rem] hover:fill-[#1D976C]" />
                    </a>
                  )}
                  </div>
              </div>
              <hr className="h-[1px] rounded-full w-[90%] bg-[#484848] border-0 my-2" />
              <div className="text-[1.2rem] flex flex-col w-[90%] my-6">
                <p>Description</p>
                <div className="text-[1rem] font-normal ml-4 max-h-96 overflow-y-scroll">
                  <BlocksRenderer blocks={{list: ({ children }) => <li>{children[0]}</li>,}} content={carDetails.attributes.Description} />
                </div>
              </div>
              <hr className="h-[1px] rounded-full w-[90%] bg-[#484848] border-0 my-2" />
              <div className="text-[1.2rem] flex justify-between w-[90%]">
                <p className="">Model</p>
                <p className="text-right font-normal">{carDetails.attributes.Model}</p>
              </div>
              <hr className="h-[1px] rounded-full w-[90%] bg-[#484848] border-0 my-2" />
            </div>
          </div>
        ) : (
          <p className="text-white font-bold text-2xl">Loading...</p>
        )}
      </div>
    </>
  );
};

export default CarDetails;
