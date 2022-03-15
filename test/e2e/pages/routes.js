const TEN_SECONDS = 10000

const url = function() {
  return this.api.globals.appUrl
}

const verifyUrl = function() {
  this.expect.url().to.startWith(`${this.api.globals.appUrl}/`)
}

const verifyFrame = function() {
  this.api.frame(0).waitForElementPresent('body', TEN_SECONDS)
}

const verifyBody = function() {
  this.waitForElementPresent('body', TEN_SECONDS)
}

module.exports = {
  url,
  commands: [{
    verifyUrl,
    verifyBody,
    verifyFrame,
  }],
  elements: { firstRoute: '.approve .title' },
}
