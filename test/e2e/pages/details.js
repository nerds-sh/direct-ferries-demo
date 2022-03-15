const TEN_SECONDS = 10000

const verifyUrl = function() {
  this.expect.url().to.startWith(`${this.api.globals.appUrl}/`)
}

const selectAdults = function() {
  this.api.frame(0)
  this.waitForElementVisible('@adultsButton', TEN_SECONDS)
  this.pause(200).click('@adultsButton').api.frameParent()
}

module.exports = {
  commands: [{
    verifyUrl,
    selectAdults,
  }],
  elements: { adultsButton: '.route-details__adults-button' },
}
