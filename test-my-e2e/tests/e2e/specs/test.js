// For authoring Nightwatch tests, see
// https://nightwatchjs.org/guide

// module.exports = {
//   'default e2e tests': browser => {
//     browser
//       .init()
//       .waitForElementVisible('#app')
//       .assert.elementPresent('.hello')
//       .assert.containsText('h1', 'Welcome to Your Vue.js App')
//       .assert.elementCount('img', 1)
//       .end()
//   },

//   'example e2e test using a custom command': browser => {
//     browser
//       .openHomepage()
//       .assert.elementPresent('.hello')
//       .end()
//   }
// }

module.exports = {
  'Router tests': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .pause(1000)
      browser.expect.element('#app').to.be.present.before(1000)
      browser
      .click('a[href="/about"]')
      .pause(1000)
      browser.expect.element('#name').to.have.attribute('class')
      .which.contains('search')
      browser
      .setValue('#name', '山田')
      .click('#send')
      browser.expect.element('#result').text
       .to.equal('こんにちは、山田さん！')
      browser.end()
  }
}