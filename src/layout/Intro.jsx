import introImg from "../assets/images/illustration-intro.svg";

const Intro = () => {
  return (
    <section className="intro">
      <div className="intro__text">
        <div className="title">
          Bring everyone together to build better products.
        </div>
        <div className="subTitle">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </div>
        <button className="btn">Get Started</button>
      </div>
      <div className="intro__img">
        <img src={introImg} />
      </div>
    </section>
  );
};

export default Intro;
