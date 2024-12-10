import React from "react";
import Slider from "react-slick";
import styles from "./HeroSection.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  {
    src: "digi.jpg",
    alt: "Slide 1",
  },
  {
    src: "digi2.jpg",
    alt: "Slide 2",
  },
  {
    src: "digi3.jpg",
    alt: "Slide 3",
  },
];

function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className={styles.heroSection}>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className={styles.carouselSlide}>
            <img src={image.src} alt={image.alt} className={styles.carouselImage} />
          </div>
        ))}
      </Slider>
    </section>
  );
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, right: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow}`}
      style={{ ...style, left: 10 }}
      onClick={onClick}
    />
  );
}

export default HeroSection;
