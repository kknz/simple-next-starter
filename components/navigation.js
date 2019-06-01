import React, { Component } from "react";
import Link from "next/link";

import ActiveLink from "./active-link";
import container from "../styles/container.scss";
import css from "../styles/components/nav.scss";
import CandyLineal from "../static/svgs/candy-lineal.svg";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileOpen: false,
      navbar_bg: ""
    };
    this.navColorChange = this.navColorChange.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.navColorChange);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.navColorChange);
  }

  navColorChange() {
    const height = 50;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > height) {
      this.setState({
        navbar_bg: css.navbar_bg
      });
    } else {
      this.setState({
        navbar_bg: ""
      });
    }
  }

  render() {
    return (
      <nav className={this.state.navbar_bg}>
        <div className={container.container}>
          <div className={container.row}>
            <div className={css.navbar}>
              <div className={css.logo_container}>
                <Link href="/">
                  <a className={css.logo}>
                    <CandyLineal />
                  </a>
                </Link>
              </div>
              <div>
                <ul className={css.list}>
                  <li>
                    <ActiveLink href="/">Home</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/page-one">Page One</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/page-two">Page Two</ActiveLink>
                  </li>
                  <li>
                    <ActiveLink href="/contact">Contact</ActiveLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
