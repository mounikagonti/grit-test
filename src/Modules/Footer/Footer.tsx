import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Footer = () => {
  const socialLinkArray = [
    {
      id: 1,
      icon: <AiOutlineTwitter />,
    },
    {
      id: 2,
      icon: <RiFacebookCircleFill />,
    },
    {
      id: 3,
      icon: <AiOutlineInstagram />,
    },
    {
      id: 4,
      icon: <AiFillLinkedin />,
    },
    {
      id: 5,
      icon: <AiFillYoutube />,
    },
  ];

  return (
    <footer>
      <div className="container">
        <div className="footer_wrapper">
          <div className="address">
            <div className="header_left">
              <div className="header_left_logo">
                <img
                  src="https://www.gritdigitech.com/assets/img/logo-icon.png"
                  alt="Logo"
                />
              </div>
              <div className="brand_name_container">
                <span>GR</span>
                <span className="industry">IT</span>
                <span className="technology">DIGITECH</span>
              </div>
            </div>
            <div className="address_text">
              <h3>Address:</h3>
              <p>59, VOC Street, Sivaganga - 630 561, Tamilnadu, India.</p>
            </div>
            <div className="need_help">
              <h3>Need help?</h3>
              <div className="phoneN">
                Phone: <a href="tel:+8610342869">+8610342869</a>
              </div>
              <div className="email">
                Email:{" "}
                <a href="mailto:aj@gritdigitech.com">aj@gritdigitech.com</a>
              </div>
            </div>
          </div>
          <div className="useful_links">
            <h1>Useful Links</h1>
            <a href="javascript:void(0)">Home</a>
            <a href="javascript:void(0)">About us</a>
            <a href="javascript:void(0)">Services</a>
            <a href="javascript:void(0)">Terms of service</a>
            <a href="javascript:void(0)">Privacy policy</a>
          </div>
          <div className="tweets">
            <TwitterTimelineEmbed
              sourceType="profile"
              screenName="GritCareer"
              options={{ height: 280 }}
            />
          </div>
          <div className="contact_us">
            <h1>Contact Us</h1>
            <div className="social_link_wrapper">
              {socialLinkArray.map((item) => (
                <div className="icon_wrapper">
                  <div className="icon">{item.icon}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="footer_copyright">
          <p>
            Copyright {new Date().getFullYear()} - All Right Reserved By GRIT
            Digitech - Pvt Ltd{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
