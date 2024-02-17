import Cart from "../../assets/cart.svg";

interface ButtonProps {
  packet: {
    img: string;
    title: string;
    description: string;
    price: string;
  };
}

const Button: React.FC<ButtonProps> = ({ packet }) => {
  const handleClick = () => {
    // Gets value by checking the value "cart"
    const storedCart = localStorage.getItem("cart");

    // If there are items in local storage it will be presented as a string, if it is empty, then it is an empty array
    const cartItems = storedCart ? JSON.parse(storedCart) : [];

    // Adds the clicked packet to the cartItems array
    const updatedCart = [...cartItems, packet];

    // Save the updated cartItems array back to local storage
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <button className="button" onClick={handleClick}>
      <span>
        <img src={Cart} alt="" />
      </span>
      Lisa ostukorvi
    </button>
  );
};

export default Button;
