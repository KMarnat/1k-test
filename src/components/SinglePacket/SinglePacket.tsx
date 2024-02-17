import Button from "../Button/Button";

interface SinglePacketProps {
  img: string;
  title: string;
  desc: string;
  price: string;
  status?: string;
  packet: {
    img: string;
    title: string;
    description: string;
    price: string;
  };
}

const SinglePacket: React.FC<SinglePacketProps> = ({ img, title, desc, price, status, packet }) => {
  return (
    <>
      <article className={`single-packet ${status}`}>
        <img src={img} alt="boxes" className="single-packet__image" />
        <h4 className="single-packet__title">{title}</h4>
        <p className="single-packet__desc">{desc}</p>
        <p className="single-packet__price">{price}</p>
        <Button packet={packet} />
      </article>
    </>
  );
};

export default SinglePacket;
