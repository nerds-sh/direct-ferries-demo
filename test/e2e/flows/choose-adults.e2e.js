describe('when user is trying to navigate to adults', () => {
  before(browser => {
    browser.url('http://localhost:3000')
  })

  it('is being able to navigate', browser => {
    browser.expect.url().to.startWith(`${browser.globals.appUrl}`)
  })
})
