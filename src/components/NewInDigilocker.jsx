import React from "react";
import Slider from "react-slick";
import styles from "./NewInDigiLocker.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const NewInDigiLocker = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const featuredItems = [
    { src: "umang.png", alt: "Slide 1" },
    { src: "audit.png", alt: "Slide 2" },
    { src: "fund.png", alt: "Slide 3" },
    { src: "municipal.png", alt: "Slide 4" },
  ];

  const quickLinks = [
    "Covid Vaccine Certificate",
    "Class XII Marksheet",
    "Class X Marksheet",
    "Driving License",
    "Registration of Vehicles",
    "Ration Card",
  ];

  return (
    <div className={styles.newDigiLocker}>
      <h2>New in DigiLocker</h2>
      <div className={styles.sliderContainer}>
        <Slider {...sliderSettings}>
          {featuredItems.map((item, index) => (
            <div key={index} className={styles.sliderCard}>
              <img
                src={item.src}
                alt={item.alt}
                className={styles.sliderImage}
              />
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.quickLinksContainer}>
        {quickLinks.map((link, index) => (
          <button key={index} className={styles.quickLink}>
            <span className={styles.quickLinkIcon}>🔗</span>
            {link}
          </button>
        ))}
      </div>
    </div>
  );
};

export default NewInDigiLocker;
