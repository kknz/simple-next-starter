import React, { Component } from "react";

import Layout from "../layout";
import container from "../styles/container.scss";
import nav from "../styles/nav.scss";

export default () => (
  <Layout className={nav.home}>
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
