import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <div id="header">
            <div className="container">
                <div className="header">
                    <div className="nav">
                        <NavLink to="/">Popular</NavLink>
                        <NavLink to="/about">Top Rated</NavLink>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default Header;