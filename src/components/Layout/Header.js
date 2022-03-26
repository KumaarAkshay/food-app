import { Fragment } from "react";
import MealImg from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCardButtion from "./HeaderCardButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React meal</h1>
       
        <HeaderCardButtion />
      </header>
      <div className={classes["main-image"]}>
        <img src={MealImg} alt="Table full of meal"></img>
      </div>
    </Fragment>
  );
};

export default Header;
