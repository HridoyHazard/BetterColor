import {
  AiFillFacebook,
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillGithub,
} from "react-icons/ai";
import {
  FooterWrapper,
  FooterContent,
  FooterSocial,
  FooterSocialIcon,
} from "./footer_style";

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <h1>BetterColor</h1>
        <FooterSocial>
          <p>Connect with us</p>
          <FooterSocialIcon>
            <a title="FB" href="/">
              <AiFillFacebook />
            </a>
            <a title="FB" href="/">
              <AiFillLinkedin />
            </a>
            <a title="FB" href="/">
              <AiFillGithub />
            </a>
            <a title="FB" href="/">
              <AiFillTwitterSquare />
            </a>
          </FooterSocialIcon>
        </FooterSocial>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
