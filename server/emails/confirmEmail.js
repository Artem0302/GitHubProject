const { EMAIL_FROM } = require("../keys");

module.exports = function(email,code) {
  return {
    to: email,
    from: EMAIL_FROM,
    subject: 'Аккаунт создан',
    html: `
      <h1>Здравствуйте,ваш код подтверждения ниже:</h1>
      <p>${code}</p>
      <hr />
      <a href="https://www.univ.kiev.ua/">Welcome back</a>
    `
  }
}
