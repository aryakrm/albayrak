import { useState } from "react";
// import Carousel from "react-bootstrap/Carousel";
import "./Gallery.scss";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper";

function ControlledCarousel() {
  //   const [index, setIndex] = useState(0);

  //   const handleSelect = (selectedIndex) => {
  //     setIndex(selectedIndex);
  //   };

  return (
    // <Carousel activeIndex={index} onSelect={handleSelect}>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/01.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/02.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/03.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/04.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/05.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/06.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/07.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/08.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src="/assets/09.jpg" alt="First slide" />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/010.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/011.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/012.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/013.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/014.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/015.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img
    //       className="d-block w-100"
    //       src="/assets/016.jpg"
    //       alt="First slide"
    //     />
    //   </Carousel.Item>
    // </Carousel>
    <div className="siper-wrapper">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/assets/01.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/02.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/03.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/04.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/05.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/06.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/07.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/08.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/09.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/010.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/011.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/012.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/013.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/014.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/015.jpg" alt="dokum" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/assets/016.jpg" alt="dokum" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ControlledCarousel;
