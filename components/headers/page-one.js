import React from "react";
import ContainerCss from "../../styles/container.scss";
import css from "../../styles/headers/header.scss";
import Rocket from "../../static/svgs/rocket.svg";
import { Link } from "react-scroll";

export default () => (
  <header className={css.header}>
    <div className={css.service_hero}>
      <div className={css.service_hero_inner}>
        <Rocket />
      </div>
    </div>
    <div className={`${ContainerCss.container} ${css.hero_container}`}>
      <div className={ContainerCss.row}>
        <div className={css.hero}>
          <div className={css.hero_text}>
            <h1>
              Donec orci lectus
              <br />
              Mauris sollic libero
            </h1>
            <h4>
              Suspendisse feugiat. Nam pretium turpis et arcu. Suspendisse
              pulvinar, augue ac venenatis condimentum, sem libero volutpat
              nibh, nec pellentesque velit pede quis nunc. Fusce risus nisl,
              viverra et, tempor et, pretium in, sapien. Sed consequat, leo eget
              bibendum sodales, augue velit cursus nunc, quis gravida magna mi a
              libero.
            </h4>
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
