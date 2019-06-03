import React from "react";
import { Element } from "react-scroll";
import NextSeo from "next-seo";

import Layout from "../layout";
import Header from "../components/headers/header";
import Portfolio from "../components/portfolio";
import ContainerCss from "../styles/container.scss";
import PageCss from "../styles/components/portfolio.scss";
import Summer from "../static/svgs/summer.svg";

export default () => (
  <Layout>
    <NextSeo
      config={{
        title: "Page two - Simple NEXT Starter",
        description:
          "Praesent egestas neque eu enim. Praesent ut ligula non mi varius sagittis. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aliquam lobortis.",
        canonical: "https://simple-next-starter.now.sh/page-two",
        openGraph: {
          url: "https://simple-next-starter.now.sh/page-two",
          title: "Page two - Simple NEXT Starter",
          description:
            "Praesent egestas neque eu enim. Praesent ut ligula non mi varius sagittis. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aliquam lobortis."
        }
      }}
    />
    <Header
      title={["Nam ipsum risus", <br />, "Rutrum vitaes"]}
      icon={<Summer />}
    >
      Nunc sed turpis. Vestibulum dapibus nunc ac augue. Phasellus blandit leo
      ut odio. Phasellus nec sem in justo pellentesque facilisis. Ut id nisl
      quis enim dignissim sagittis. Vivamus aliquet elit ac nisl. Aenean tellus
      metus, bibendum sed, posuere ac, mattis non, nunc. Sed fringilla mauris
      sit amet nibh. Nam adipiscing.
    </Header>
    <main>
      <Element name="main_section" />
      <section>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_12}>
              <div className={PageCss.portfolios}>
                <Portfolio
                  src="/static/images/portfolio-one.jpg"
                  alt="Portfolio One"
                  company="Suspendisse eu ligula"
                  name="Nullam cursus, Senior Manager"
                >
                  "Curabitur nisi. Ut varius tincidunt libero. Fusce a quam. Sed
                  consequat, leo eget bibendum sodales."
                </Portfolio>
                <Portfolio
                  src="/static/images/portfolio-two.jpg"
                  alt="Portfolio Two"
                  company="Suspendisse eu ligula"
                  name="Nullam cursus, Senior Manager"
                >
                  "Curabitur nisi. Ut varius tincidunt libero. Fusce a quam. Sed
                  consequat, leo eget bibendum sodales."
                </Portfolio>
                <Portfolio
                  src="/static/images/portfolio-two.jpg"
                  alt="Portfolio Two"
                  company="Suspendisse eu ligula"
                  name="Nullam cursus, Senior Manager"
                >
                  "Curabitur nisi. Ut varius tincidunt libero. Fusce a quam. Sed
                  consequat, leo eget bibendum sodales."
                </Portfolio>
                <Portfolio
                  src="/static/images/portfolio-one.jpg"
                  alt="Portfolio One"
                  company="Suspendisse eu ligula"
                  name="Nullam cursus, Senior Manager"
                >
                  "Curabitur nisi. Ut varius tincidunt libero. Fusce a quam. Sed
                  consequat, leo eget bibendum sodales."
                </Portfolio>
                <Portfolio
                  src="/static/images/portfolio-one.jpg"
                  alt="Portfolio One"
                  company="Suspendisse eu ligula"
                  name="Nullam cursus, Senior Manager"
                >
                  "Curabitur nisi. Ut varius tincidunt libero. Fusce a quam. Sed
                  consequat, leo eget bibendum sodales."
                </Portfolio>
                <Portfolio
                  src="/static/images/portfolio-two.jpg"
                  alt="Portfolio Two"
                  company="Suspendisse eu ligula"
                  name="Nullam cursus, Senior Manager"
                >
                  "Curabitur nisi. Ut varius tincidunt libero. Fusce a quam. Sed
                  consequat, leo eget bibendum sodales."
                </Portfolio>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
