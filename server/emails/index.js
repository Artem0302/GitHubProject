const { EMAIL_FROM } = require("../keys");

module.exports = function(email,password) {
  return {
    to: email,
    from: EMAIL_FROM,
    subject: 'Аккаунт создан',
    html: `
      <h1>Служба восстановления пароля</h1>
      <p>ваш email: ${email}</p>
      <p>ваш пароль: ${password}</p>
      <hr />
      <a href="https://www.univ.kiev.ua/">Welcome back</a>
    `
  }
}
