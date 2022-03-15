describe('when user is trying to change passengers', () => {
  const page = {}

  before(browser => {
    page.routes = browser.page.routes()
    page.details = browser.page.details()
    page.routes.navigate()
  })

  it('content is right', () => {
    page.routes.verifyBody()
    page.routes.verifyFrame()
    page.routes.verifyUrl()
  })

  it('can select first route', () => {
    page.routes.selectFirst()
    page.details.verifyUrl()
    page.details.selectAdults()
  })
})
