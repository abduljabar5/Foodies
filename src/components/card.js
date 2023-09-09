import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CardDefault } from "./CardDefault";

export default function CardSlider({ data }) {
    const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselRef = React.useRef(null);

  const onNext = () => {
    carouselRef.current.next();
  };

  const onPrevious = () => {
    carouselRef.current.previous();
  };

  return (
    <div className="m-12 sm:m-4 md:m-12">
    <h2 className="text-xl sm:text-2xl md:text-3xl mb-6 sm:mb-8 md:mb-20">Popular Restaurants Near You</h2>
    <Carousel 
        responsive={responsive}
        arrows={false}
        ref={carouselRef}
    >
        {data.map((restaurant, index) => (
            <CardDefault key={index} restaurant={restaurant} />
        ))}
    </Carousel>
    <div className="flex justify-between mt-2 sm:mt-4">
        <button onClick={onPrevious} className="bg-blue-500 text-white px-1 sm:px-2 md:px-4 py-1 md:py-2 mr-1 sm:mr-2 rounded">
            Previous
        </button>
        <button onClick={onNext} className="bg-blue-500 text-white px-1 sm:px-2 md:px-4 py-1 md:py-2 ml-1 sm:ml-2 rounded">
            Next
        </button>
    </div>
</div>

);
}
