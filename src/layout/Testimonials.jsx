import { testimonis } from "../const";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__title">What they&apos;ve said</div>
      <Swiper
        className="testimonials__carousel"
        spaceBetween={50}
        slidesPerView={3}
        grabCursor={true}
      >
        {testimonis.map((testimoni, index) => (
          <SwiperSlide key={index} className="testimonials__content">
            <div className="testimonials__content-avatar">
              <img src={testimoni.avatar} alt={testimoni.name} />
            </div>
            <div className="testimonials__content-name">{testimoni.name}</div>
            <div className="testimonials__content-text">
              “{testimoni.content}”
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="btn">Get Started</button>
    </section>
  );
};

export default Testimonials;
