import React from "react";

import Layout from "../layout";
import Header from "../components/headers/home";
import container from "../styles/container.scss";
import nav from "../styles/nav.scss";

export default () => (
  <Layout className={nav.home}>
    <Header />
    <main>
      <section>
        <div className={container.container}>
          <div className={container.row}>
            <div className={container.col_6}>
              <h2 className={container.section_title}>
                Nullam accumsan lorem in dui
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
