import React from "react";

import ContainerCss from "../../styles/container.scss";
import css from "../../styles/headers/contact.scss";

export default () => (
  <header className={css.header}>
    <div className={`${ContainerCss.container} ${css.promo_container}`}>
      <div className={ContainerCss.row}>
        <div className={css.promo}>
          <div className={css.promo_text}>
            <h1>Aenean commodo</h1>
            <h4>
              Aliquam lobortis. Aenean viverra rhoncus pede. Ut a nisl id ante
              tempus.
            </h4>
          </div>
        </div>
      </div>
    </div>
  </header>
);
