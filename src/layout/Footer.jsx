import logo from "../assets/images/logo-footer.svg";
import { medias } from "../const";

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer__media">
        <img src={logo} alt="logo icon" className="footer__media-logo" />
        <div className="footer__media-link">
          {medias.map((media, index) => (
            <a key={index} href="" className="footer__media-list">
              <img src={media.icon} alt={media.title} />
            </a>
          ))}
        </div>
      </div>
      <div className="footer__nav">
        <div className="column">
          <a href="">Home</a>
          <a href="">Pricing</a>
          <a href="">Product</a>
          <a href="">About Us</a>
        </div>
        <div className="column">
          <a href="">Careers</a>
          <a href="">Community</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
      <div className="footer__subs">
        <form className="footer__subs-box">
          <input type="email" placeholder="Updates in your inbox…" required />
          <button className="btn btn-submit">Go</button>
        </form>
        <p>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
      </div>
    </section>
  );
};

export default Footer;
