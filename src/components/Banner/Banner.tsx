import Logo from "../../assets/logo.svg";
import QuotationMark from "../../assets/quotation-mark.svg";

const Banner = () => {
  return (
    <div className="banner">
      <img src={Logo} alt="Logo" className="banner__logo" />
      <h1 className="banner__title">Aenean Vitae</h1>
      <p className="banner__quote">
        <span>
          <img src={QuotationMark} alt="quotation mark" />
        </span>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sagittis elit in leo
        iaculis euismod. Sed aliquam aliquet lectus, eget placerat est vestibulum eget.
      </p>
    </div>
  );
};

export default Banner;
