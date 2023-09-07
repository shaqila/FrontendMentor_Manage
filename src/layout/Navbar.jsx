import logo from "../assets/images/logo.svg";
import iconHamburger from "../assets/images/icon-hamburger.svg";

const Navbar = () => {
  // const [isOpen, setOpen] = useState(false);
  // const isBigScreen = useMediaQuery({ query: "(min-width: 800px)" });
  return (
    <nav className="navbar">
      <a href="" className="navbar-brand">
        <img src={logo} alt="logo" />
      </a>
      <div className="navbar__links">
        <a href="">Pricing</a>
        <a href="">Product</a>
        <a href="">About Us</a>
        <a href="">Careers</a>
        <a href="">Community</a>
      </div>
      <div className="navbar__button">
        <button className="btn">Get Started</button>
      </div>
      <img className="navbar__hamburger" src={iconHamburger} alt="icon-nav" />
    </nav>
  );
};

export default Navbar;
