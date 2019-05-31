import React, { Component } from "react";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import "./styles/global.scss";
import css from "./styles/layout.scss";

export default class extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={this.props.className && this.props.className}>
        <Navigation />

        <div className={css.main}>{this.props.children}</div>
        <Footer />
      </div>
    );
  }
}
