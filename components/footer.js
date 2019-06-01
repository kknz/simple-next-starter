import React from "react";
import Link from "next/link";

import container from "../styles/container.scss";
import css from "../styles/components/footer.scss";

export default () => (
  <footer className={css.footer}>
    <div className={container.container}>
      <div className={container.row}>
        <div className={container.col_6}>
          <div className={css.footer_content_title}>Nullam dictum felis eu</div>
          <div className={css.footer_content_content}>
            Morbi nec metus. Pellentesque dapibus hendrerit tortor. In ac felis
            quis tortor malesuada pretium. Ut non enim eleifend felis pretium
            feugiat. Etiam feugiat lorem non metus. Nullam sagittis.
          </div>
        </div>
        <div className={container.col_6}>
          <div className={css.footer_contact_btn}>
            <Link href="/contact">
              <a>CONTACT</a>
            </Link>
          </div>
        </div>
        <div className={container.col_12}>
          <div className={css.assets}>
            Assets created by freepik.com and flaticon.com
          </div>
        </div>
      </div>
    </div>
  </footer>
);
