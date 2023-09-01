import { testimonis } from "../const";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials__title">What they&apos;ve said</div>
      <div className="testimonials__carousel">
        {testimonis.map((testimoni, index) => (
          <div key={index} className="testimonials__content">
            <div className="testimonials__content-avatar">
              <img src={testimoni.avatar} alt={testimoni.name} />
            </div>
            <div className="testimonials__content-name">{testimoni.name}</div>
            <div className="testimonials__content-text">
              “{testimoni.content}”
            </div>
          </div>
        ))}
      </div>
      <button className="btn">Get Started</button>
    </section>
  );
};

export default Testimonials;
