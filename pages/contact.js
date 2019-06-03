import React, { Component } from "react";
import { sendMail, emailValidator } from "../functions";

import Layout from "../layout";
import Header from "../components/headers/contact";
import ContainerCss from "../styles/container.scss";
import PageCss from "../styles/pages/contact.scss";
import form from "../styles/form.scss";
import Send from "../static/svgs/send.svg";
import Mail from "../static/svgs/mail.svg";

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      email_class: "",
      is_spinner: false,
      is_submit_btn: true,
      is_submited: false,
      is_error: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();

    if (this.state.is_spinner) {
      return;
    }

    const email = this.state.email;

    if (emailValidator(email)) {
      this.setState({ is_spinner: true });

      let formData = new FormData();
      formData.append("site", "Simple Next Starter");
      formData.append("form", "Contact");
      formData.append("name", this.state.name);
      formData.append("email", email);
      formData.append("phone", this.state.phone);
      formData.append("subject", this.state.subject);
      formData.append("message", this.state.message);

      sendMail(formData)
        .then(response => {
          this.setState({ is_submited: true });
        })
        .catch(error => {
          this.setState({ is_submited: true });
          this.setState({ is_error: true });
        });
    } else {
      this.setState({ email_class: form.email_class });
      setTimeout(() => {
        this.setState({ email_class: "" });
      }, 800);
    }
  }

  render() {
    return (
      <Layout>
        <Header />
        <main>
          <div className={PageCss.white_background} />
          <div className={PageCss.gradient_background} />
          <section className={PageCss.contact_section}>
            <div className={ContainerCss.container}>
              <div className={ContainerCss.row}>
                <div className={ContainerCss.col_12}>
                  <div className={PageCss.form_section}>
                    <div className={PageCss.left_column}>
                      <div>
                        <h3>Fusce vel dui</h3>
                        <div>
                          <span>
                            Phasellus nec sem in justo pellentesque facilisis.
                            Phasellus ullamcorper ipsum rutrum nunc. Sed magna
                            purus, fermentum eu, tincidunt eu, varius ut, felis.
                          </span>
                          <div className={PageCss.contact_info}>
                            <div>
                              <div className={PageCss.icon}>
                                <Mail />
                              </div>
                              <div className={PageCss.info}>
                                <a href="mailto:hello@example.com">
                                  hello@example.com
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={PageCss.form_column}>
                      <div className={PageCss.form_container}>
                        <form
                          onSubmit={this.handleSubmit}
                          className={form.contact_form}
                        >
                          <fieldset>
                            <div className={PageCss.form_row}>
                              <label>Name</label>
                              <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={this.handleChange}
                              />
                            </div>

                            <div className={PageCss.form_row}>
                              <label>Email</label>
                              <input
                                type="text"
                                name="email"
                                className={this.state.email_class}
                                value={this.state.email}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className={PageCss.form_row}>
                              <label>Phone</label>
                              <input
                                type="text"
                                name="phone"
                                value={this.state.phone}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className={PageCss.form_row}>
                              <label>Subject</label>
                              <input
                                type="text"
                                name="subject"
                                value={this.state.subject}
                                onChange={this.handleChange}
                              />
                            </div>
                            <div className={PageCss.form_row}>
                              <label className={PageCss.contains_summary}>
                                Message
                              </label>
                              <textarea
                                name="message"
                                value={this.state.message}
                                onChange={this.handleChange}
                              />
                            </div>
                          </fieldset>
                          {!this.state.is_submited && (
                            <div className={PageCss.submit_row}>
                              {this.state.is_spinner ? (
                                <button>
                                  <div className={form.spinner}>
                                    <div />
                                    <div />
                                    <div />
                                  </div>
                                </button>
                              ) : (
                                <button>
                                  <Send />
                                  <span>Send</span>
                                </button>
                              )}
                            </div>
                          )}
                          {this.state.is_submited && (
                            <div>
                              {!this.state.is_error ? (
                                <div
                                  className={`${PageCss.form_msg} ${
                                    PageCss.msg_success
                                  }`}
                                >
                                  Thank you for your message.
                                </div>
                              ) : (
                                <div
                                  className={`${PageCss.form_msg} ${
                                    PageCss.msg_error
                                  }`}
                                >
                                  Something went wrong.
                                </div>
                              )}
                            </div>
                          )}
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={ContainerCss.container}>
              <div className={ContainerCss.row}>
                <div className={ContainerCss.col_12}>
                  <div className={PageCss.contact_info_text}>
                    Nulla porta dolor. Proin sapien ipsum, porta a, auctor quis,
                    euismod ut, mi.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </Layout>
    );
  }
}
