import React from 'react';
import Slider from 'react-slick';
import './Hero.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const images = [
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.perfectvenue.com%2Fpost%2Fhotel-event-management&psig=AOvVaw0hjBitDVQh664OOZcEM99O&ust=1732793309759000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjU_qW0_IkDFQAAAAAdAAAAABAJ " ,
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fprismm.com%2Fsolutions%2Findependent-hotels&psig=AOvVaw0hjBitDVQh664OOZcEM99O&ust=1732793309759000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCJjU_qW0_IkDFQAAAAAdAAAAABAR",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.mews.com%2Fen%2Fblog%2Fhotel-event-planner&psig=AOvVaw2Ae3zBcPWUwFEQZ5HErEkg&ust=1732797252886000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjIzfrC_IkDFQAAAAAdAAAAABAE",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftotaleventsdfw.com%2F6-factors-to-consider-when-planning-a-corporate-event%2F&psig=AOvVaw2Ae3zBcPWUwFEQZ5HErEkg&ust=1732797252886000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjIzfrC_IkDFQAAAAAdAAAAABAQ",
    "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.signupgenius.com%2FBusiness%2Fcompany-event-ideas.cfm&psig=AOvVaw2Ae3zBcPWUwFEQZ5HErEkg&ust=1732797252886000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCMjIzfrC_IkDFQAAAAAdAAAAABAY"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <section id="hero" className="hero">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1>Make Your Event Unforgettable</h1>
          <p>Discover premium event services tailored to your needs.</p>
          <button className="cta-button">Add your Packages</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
