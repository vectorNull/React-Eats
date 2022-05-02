import { Fragment } from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";

import mealsImg from "../../Assets/meals.jpg";

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>React Eats</h1>
                <HeaderCartButton />
            </header>
            <div className={classes["main-image"]}>
                <img src={mealsImg} alt="food on table" />
            </div>
        </Fragment>
    );
};

export default Header;
