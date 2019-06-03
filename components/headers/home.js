import React from "react";

import ContainerCss from "../../styles/container.scss";
import css from "../../styles/headers/home.scss";
import PatternOne from "../../static/svgs/pattern-one.svg";
import PatternTwo from "../../static/svgs/pattern-two.svg";

export default () => (
  <header className={css.header}>
    <div className={css.pattern_one}>
      <PatternOne />
    </div>
    <div className={css.pattern_two}>
      <PatternTwo />
    </div>
    <div className={`${ContainerCss.container} ${css.hero_container}`}>
      <div className={css.hero}>
        <div className={css.hero_text}>
          <h1>
            Simple Next
            <br />
            Starter
          </h1>
        </div>
      </div>
    </div>
  </header>
);
