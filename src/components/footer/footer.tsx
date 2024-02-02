import moncho from "@assets/images/monchito 1.png";
import texts from "../../constants/texts.json";
import { RiTwitterXLine } from "react-icons/ri";
import { FaTwitch } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import "@styles/footer.css";

const Footer = () => {
  const languageText = texts[0].spanish.footer;

  return (
    <div className="footer">
      <section className="footer__div--main">
        <nav className="footer__nav">
          <ul>
            <p className="footer__nav--title">{languageText.index}</p>
            {languageText?.nav?.map((section) => (
              <li className="footer__nav--link">{section}</li>
            ))}
          </ul>
        </nav>
        <div className="footer__div--content">
          <h4 className="footer__h4">{languageText.title}</h4>
          <p className="footer__p--content">{languageText.main}</p>
          <div className="footer__div--rrss">
            <a
              className="footer__icon"
              target="_blank"
              href="https://www.youtube.com/channel/UCXAVwj7gHmnolgx2r75AqGQ">
              <FaYoutube />
            </a>
            <a
              className="footer__icon"
              target="_blank"
              href="https://www.twitch.tv/villapinguino">
              <FaTwitch />
            </a>
            <a
              className="footer__icon"
              target="_blank"
              href="https://twitter.com/PodcastPinguino">
              <RiTwitterXLine />
            </a>
          </div>
        </div>
        <div className="footer__div--img">
          <img src={moncho} alt="logo Moncho pingüi" className="footer__img" />
          <svg
            className="footer__svg"
            xmlns="http://www.w3.org/2000/svg"
            // width="115"
            // height="24"
            viewBox="0 0 115 24"
            fill="none">
            <ellipse cx="57.5" cy="12" rx="57.5" ry="12" fill="#4D1E9B" />
          </svg>
        </div>
      </section>
      <section className="footer__div--foot">
        <p>{languageText.foot}</p>
      </section>
    </div>
  );
};

export default Footer;
