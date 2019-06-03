export const sendMail = formData => {
  return fetch("https://example.com/api/email/send", {
    method: "POST",
    headers: {
      secret: "oKs23iP"
    },
    body: formData
  });
};

export const emailValidator = value => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(value.trim()).toLowerCase());
};
