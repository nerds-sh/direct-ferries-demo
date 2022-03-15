const TEN_SECONDS = 10000

const url = function() {
  return this.api.globals.appUrl
}

const verifyUrl = function() {
  this.expect.url().to.startWith(`${this.api.globals.appUrl}/`)
}

const verifyFrame = function() {
  this.api.frame(0)
  this.waitForElementPresent('body', TEN_SECONDS).api.frameParent()
}

const verifyBody = function() {
  this.api.frameParent()
  this.waitForElementPresent('body', TEN_SECONDS)
}

const selectFirst = function() {
  this.api.frame(0)
  this.waitForElementVisible('@firstRoute')
  this.pause(200).click('@firstRoute').api.frameParent()
}

module.exports = {
  url,
  commands: [{
    verifyUrl,
    verifyBody,
    verifyFrame,
    selectFirst,
  }],
  elements: { firstRoute: '.routes__result-item' },
}
