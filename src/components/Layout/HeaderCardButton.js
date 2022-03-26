import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCardButton.module.css";
const HeaderCardButtion = (props) => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> Your Cart</span>
      <span className={classes.badge}>20</span>
    </button>
  );
};

export default HeaderCardButtion;
