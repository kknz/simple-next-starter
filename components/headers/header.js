import React from "react";
import { Link } from "react-scroll";

import ContainerCss from "../../styles/container.scss";
import css from "../../styles/headers/header.scss";

const Header = ({ children, title, icon }) => {
  return (
    <header className={css.header}>
      <div className={css.service_hero}>
        <div className={css.service_hero_inner}>{icon}</div>
      </div>
      <div className={`${ContainerCss.container} ${css.hero_container}`}>
        <div className={ContainerCss.row}>
          <div className={css.hero}>
            <div className={css.hero_text}>
              <h1>{title}</h1>
              <h4>{children}</h4>
            </div>
            <Link
              activeClass="active"
              to="main_section"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <button>Read More</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
