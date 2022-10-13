import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footside">
        <h1 className="footer_name">
          <a title="" href="/">
            BetterColor
          </a>
        </h1>
        <ul className="footer_list">
          <li class="footer_item">
            <a title="about" href="/">
              About
            </a>
          </li>
          <li className="footer_item">
            <a title="contact" href="/">
              Contact
            </a>
          </li>
          <li class="footer_item">
            <a title="contact" href="/">
              Support
            </a>
          </li>
        </ul>
      </div>
      <div class="footside">
        <p class="footer_text">Connect with us</p>
        <div class="social">
          <a className="social_icon" title="FB" href="">
            <AiFillFacebook />
          </a>
          <a className="social_icon" title="FB" href="">
            <AiFillLinkedin />
          </a>
          <a className="social_icon" title="FB" href="">
            <AiFillGithub />
          </a>
          <a className="social_icon" title="FB" href="">
            <AiFillTwitterSquare />
          </a>
        </div>
      </div>
      <br />
    </footer>
  );
};

export default Footer;
