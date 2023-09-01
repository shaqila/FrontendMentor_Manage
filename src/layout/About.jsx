import { features } from "../const";

const About = () => {
  return (
    <section className="about">
      <div className="about__text">
        <div className="about__title">What’s different about Manage?</div>
        <div className="about__subTitle">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </div>
      </div>
      <div className="about__feature">
        {features.map((feature, index) => (
          <div key={index} className="about__feature-content">
            <div className="about__feature-number">
              {(index + 1).toString().padStart(2, "0")}
            </div>
            <div className="about__feature-text">
              <div
                className="about__feature-title"
                data-count={index + 1 < 10 ? `0${index + 1}` : index + 1}
              >
                {feature.title}
              </div>
              <div className="about__feature-description">
                {feature.content}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
