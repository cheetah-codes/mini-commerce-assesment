// import React from "react";
// import { Metadata } from "next";

// const Carousel = () => {
//   return <div>Carousel</div>;
// };

// export default Carousel;

"use client";
import { useEffect, useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { BannerType, Slide } from "@/types";
import { title } from "process";
import { bannerImages } from "@/utils";
import Image from "next/image";

export const Carousel = ({ data }: { data: BannerType[] }) => {
  const [slide, setSlide] = useState(0);

  const nextSlide = () => {
    setSlide(slide === data.length - 1 ? 0 : slide + 1);
  };

  const prevSlide = () => {
    setSlide(slide === 0 ? data.length - 1 : slide - 1);
  };

  useEffect(() => {
    setTimeout(() => {
      nextSlide();
    }, 80000);
  }, [nextSlide]);

  console.log("here", data);

  return (
    <>
      <div className="carousel overflow-hidden cursor-pointer relative z-0 lg:px-[48px] ">
        <BsArrowLeftCircle onClick={prevSlide} className="arrow arrow-left" />
        {data.map((item: any, idx: number) => {
          return (
            // <img
            //   src={item.src}
            //   alt={item.alt}
            //   key={idx}
            //   className={slide === idx ? "slide" : "slide slide-hidden"}
            // />
            <div className="rounded-[60px] flex" key={item?.title}>
              <Image
                src={item?.source}
                alt={item?.title}
                // width={auto}
                height={1080}
                className={
                  slide === idx
                    ? "slide rounded-[60px] w-full"
                    : "slide slide-hidden rounded-[60px]"
                }
              />
            </div>
          );
        })}
        <BsArrowRightCircle onClick={nextSlide} className="arrow arrow-right" />
        <span className="indicators">
          {data.map((_, idx) => {
            return (
              <button
                key={idx}
                className={
                  slide === idx ? "indicator" : "indicator indicator-inactive"
                }
                onClick={() => setSlide(idx)}
              ></button>
            );
          })}
        </span>
        {/* <div className="absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/100 via-gray-900/30 to-gray-300 " /> */}
      </div>
    </>
  );
};
