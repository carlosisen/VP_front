import moncho from "@assets/images/monchito 1.png";
import texts from "../../constants/texts.json";
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
        <img src={moncho} alt="logo Moncho pingüi" className="footer_img"></img>
      </section>
      <section className="footer__div--foot">
        <p>{languageText.foot}</p>
      </section>
    </div>
  );
};

export default Footer;
