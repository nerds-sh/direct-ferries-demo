describe('when user is trying to navigate to adults', () => {
  const page = {}

  before(browser => {
    page.routes = browser.page.routes()
    page.routes.navigate()
  })

  it('content is right', () => {
    page.routes.verifyBody()
    page.routes.verifyFrame()
    page.routes.verifyUrl()
  })
})
