const Button = ({ setCartCount }) => {
  const updateCart = () => {
    setCartCount((prevState) => prevState + 1);
  };
  return <button onClick={updateCart}>Add t cart</button>;
};
export default Button;
