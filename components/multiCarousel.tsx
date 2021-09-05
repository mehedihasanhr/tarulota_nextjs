import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";

interface MCarousel {
  children: any;
}

const MultiCarousel = ({ children }: MCarousel) => {
  const [deviceType, setDeviceType] = useState<string>("");

  useEffect(() => {
    getDeviceType();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", getDeviceType);
    return () => window.removeEventListener("resize", getDeviceType);
  }, []);

  const getDeviceType = () => {
    let deviceWidth = window.innerWidth;
    if (deviceWidth >= 1400) {
      setDeviceType("largeDesktop");
    } else if (deviceWidth >= 1200 && deviceWidth < 1400) {
      setDeviceType("desktop");
    } else if (deviceWidth >= 991 && deviceWidth < 1200) {
      setDeviceType("largeTablet");
    } else if (deviceWidth >= 768 && deviceWidth < 991) {
      setDeviceType("tablet");
    } else if (deviceWidth >= 576 && deviceWidth < 768) {
      setDeviceType("largeMobile");
    } else {
      setDeviceType("mobile");
    }
  };

  const responsive = {
    largeDesktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 6,
      slidesToSlide: 5, // optional, default to 1.
    },

    desktop: {
      breakpoint: { max: 1400, min: 1200 },
      items: 5,
      slidesToSlide: 4, // optional, default to 1.
    },
    largeTablet: {
      breakpoint: { max: 1200, min: 991 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 991, min: 768 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },

    largeMobile: {
      breakpoint: { max: 768, min: 576 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },

    mobile: {
      breakpoint: { max: 576, min: 300 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };
  return (
    <Carousel
      swipeable={true}
      draggable={false}
      showDots={false}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      customTransition="all .3s ease-in-out"
      transitionDuration={500}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "largeMobile", "mobile"]}
      deviceType={deviceType}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
      {children}
    </Carousel>
  );
};

export default MultiCarousel;
