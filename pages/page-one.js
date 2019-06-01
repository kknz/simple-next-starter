import React from "react";
import { Element } from "react-scroll";

import Layout from "../layout";
import Header from "../components/headers/page-one";

export default () => (
  <Layout>
    <Header />
    <main>
      <Element name="main_section" />
    </main>
  </Layout>
);
