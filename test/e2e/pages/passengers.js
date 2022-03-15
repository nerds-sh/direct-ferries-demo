const TEN_SECONDS = 10000

const verifyUrl = function() {
  this.expect.url().to.startWith(`${this.api.globals.appUrl}/`)
}

const setAdultsCount = function(count) {
  this.api.frame(0)
  this.waitForElementPresent('@adultsCountInput', TEN_SECONDS)
  this.setValue('@adultsCountInput', count).click('body')
  this.api.frameParent()
}

const verifyAdultsCount = function(expected) {
  this.api.frame(0)
  this.expect.element('@adultsCountInput').to.have.value.that.equals(expected)
  this.api.frameParent()
}

const setChildrenCount = function(count) {
  this.api.frame(0)
  this.waitForElementPresent('@childrenCountInput', TEN_SECONDS)
  this.setValue('@childrenCountInput', count).click('body')
  this.api.frameParent()
}

const verifyChildrenCount = function(expected) {
  this.api.frame(0)
  this.expect.element('@childrenCountInput').to.have.value.that.equals(expected)
  this.api.frameParent()
}

const clickDone = function() {
  this.api.frame(0)
  this.waitForElementVisible('@doneButton', TEN_SECONDS)
  this.click('@doneButton').api.frameParent()
}

const ensureClosed = function() {
  this.api.frame(0)
  this.waitForElementNotPresent('@adultsCountInput')
  this.waitForElementNotPresent('@childrenCountInput')
  this.waitForElementNotPresent('@doneButton').api.frameParent()
}

module.exports = {
  commands: [{
    verifyUrl,
    setAdultsCount,
    verifyAdultsCount,
    setChildrenCount,
    verifyChildrenCount,
    clickDone,
    ensureClosed,
  }],
  elements: {
    adultsCountInput: 'input.total-passengers__adults',
    childrenCountInput: 'input.total-passengers__children',
    doneButton: 'button.total-passengers__done',
  },
}
