import React from "react";
import { Element } from "react-scroll";
import NextSeo from "next-seo";

import Layout from "../layout";
import Header from "../components/headers/header";
import Separator from "../components/separator";
import Feature from "../components/feature";
import ContainerCss from "../styles/container.scss";
import PageCss from "../styles/pages/page-one.scss";
import Candy from "../static/svgs/candy.svg";
import Rocket from "../static/svgs/rocket.svg";

export default () => (
  <Layout>
    <NextSeo
      config={{
        title: "Page one - Simple NEXT Starter",
        description:
          "Praesent egestas neque eu enim. Praesent ut ligula non mi varius sagittis. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aliquam lobortis.",
        canonical: "https://simple-next-starter.now.sh/page-one",
        openGraph: {
          url: "https://simple-next-starter.now.sh/page-one",
          title: "Page one - Simple NEXT Starter",
          description:
            "Praesent egestas neque eu enim. Praesent ut ligula non mi varius sagittis. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. Aliquam lobortis."
        }
      }}
    />
    <Header title="Donec orci lectus Mauris sollic libero" icon={<Rocket />}>
      Suspendisse feugiat. Nam pretium turpis et arcu. Suspendisse pulvinar,
      augue ac venenatis condimentum, sem libero volutpat nibh, nec pellentesque
      velit pede quis nunc. Fusce risus nisl, viverra et, tempor et, pretium in,
      sapien. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,
      quis gravida magna mi a libero.
    </Header>
    <main>
      <Element name="main_section" />
      <section>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_12}>
              <h2
                className={` ${ContainerCss.section_title} 
                ${ContainerCss.section_center}`}
              >
                Fusce a quam
              </h2>
              <Separator type="center" />
              <div className={ContainerCss.row}>
                <div className={ContainerCss.col_12}>
                  <p className={ContainerCss.section_p}>
                    Nunc nec neque. Vestibulum ullamcorper mauris at ligula.
                    Fusce fermentum. Phasellus dolor.. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Sed aliquam, nisi quis porttitor congue, elit erat
                    euismod orci, ac placerat dolor lectus quis orci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={PageCss.section_grey}>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_3}>
              <Feature title="Sed libero" icon={<Candy />}>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Phasellus tempus. Aliquam eu nunc. Nulla facilisi.
              </Feature>
            </div>
            <div className={ContainerCss.col_3}>
              <Feature title="Cras varius" icon={<Candy />}>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Phasellus tempus. Aliquam eu nunc. Nulla facilisi.
              </Feature>
            </div>
            <div className={ContainerCss.col_3}>
              <Feature title="Fusce pharetra" icon={<Candy />}>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Phasellus tempus. Aliquam eu nunc. Nulla facilisi.
              </Feature>
            </div>
            <div className={ContainerCss.col_3}>
              <Feature title="Nullam null" icon={<Candy />}>
                In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                In dui magna, posuere eget, vestibulum et, tempor auctor, justo.
                Phasellus tempus. Aliquam eu nunc. Nulla facilisi.
              </Feature>
            </div>
          </div>
        </div>
      </section>
      <section className={PageCss.space_bg} />
      <section>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_12}>
              <h2
                className={`${ContainerCss.section_title} ${
                  ContainerCss.section_center
                }`}
              >
                Maecenas egestas
              </h2>
              <Separator type="center" />
              <div className={ContainerCss.row}>
                <div className={ContainerCss.col_12}>
                  <p className={ContainerCss.section_p}>
                    Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet
                    iaculis, ipsum. Nunc nonummy metus. Pellentesque ut neque.
                    Praesent vestibulum dapibus nibh.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={`${ContainerCss.row} ${PageCss.server}`}>
            <div className={ContainerCss.col_12}>
              <div className={PageCss.landed}>
                <img src="/static/images/landed.png" alt="landed" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
