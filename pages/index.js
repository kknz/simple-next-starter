import React from "react";

import Layout from "../layout";
import Header from "../components/headers/home";
import Separator from "../components/separator";
import Serivce from "../components/service";
import Brand from "../components/brand";
import ContainerCss from "../styles/container.scss";
import NavCss from "../styles/components/nav.scss";
import PageCss from "../styles/pages/home.scss";
import BrandCss from "../styles/components/brand.scss";
import Candy from "../static/svgs/candy.svg";
import ReactSVG from "../static/svgs/react.svg";

export default () => (
  <Layout className={NavCss.home}>
    <Header />
    <main>
      <section>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_6}>
              <h2 className={ContainerCss.section_title}>
                Nullam accumsan lorem in dui
              </h2>
              <Separator />
            </div>
            <div className={ContainerCss.col_6}>
              <div className={PageCss.section_content}>
                <div className={PageCss.services}>
                  <Serivce title="Sed consequat leo eget" icon={<Candy />}>
                    Praesent metus tellus, elementum eu, semper a, adipiscing
                    nec, purus. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit. Proin sapien ipsum, porta a, auctor quis,
                    euismod ut, mi. Curabitur blandit mollis lacus.
                  </Serivce>
                  <Serivce title="Curabitur ligula sapien" icon={<Candy />}>
                    Phasellus tempus. Mauris sollicitudin fermentum libero.
                    Suspendisse faucibus, nunc et pellentesque egestas, lacus
                    ante convallis tellus, vitae iaculis lacus elit id tortor.
                    Nunc nec neque. Curabitur a felis in nunc fringilla
                    tristique. Vivamus euismod mauris.
                  </Serivce>
                  <Serivce title="Nunc sed turpis" icon={<Candy />}>
                    Vivamus consectetuer hendrerit lacus. Nulla facilisi.
                    Suspendisse eu ligula. Sed consequat, leo eget bibendum
                    sodales, augue velit cursus nunc, quis gravida magna mi a
                    libero. Morbi nec metus. Morbi mattis ullamcorper velit.
                  </Serivce>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={PageCss.section_portfolio}>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_6}>
              <h2 className={ContainerCss.section_title}>
                Proin magna
                <br />
                Aliquam
              </h2>
              <Separator />
            </div>
          </div>
        </div>
        <div className={PageCss.mockup}>
          <div className={PageCss.tablet_portrait}>
            <img
              src="/static/images/placeholder.jpg"
              alt="desktop placeholder"
            />
          </div>
          <div className={PageCss.phone_small}>
            <img
              src="/static/images/placeholder_mobile.jpg"
              alt="mobile placeholder"
            />
          </div>
        </div>
      </section>
      <section>
        <div className={ContainerCss.container}>
          <div className={ContainerCss.row}>
            <div className={ContainerCss.col_12}>
              <h2
                className={`
                  ${ContainerCss.section_title} 
                  ${ContainerCss.section_center}
                `}
              >
                Aenean tellus
              </h2>
              <Separator type="center" />
              <div className={PageCss.brands}>
                <div className={ContainerCss.row}>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                  <div className={ContainerCss.col_3}>
                    <Brand cssClass={BrandCss.react} icon={<ReactSVG />} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </Layout>
);
