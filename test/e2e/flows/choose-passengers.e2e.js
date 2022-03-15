describe('when user is trying to change passengers', () => {
  const page = {}

  before(browser => {
    page.routes = browser.page.routes()
    page.details = browser.page.details()
    page.passengers = browser.page.passengers()

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

  it('can change adults count', () => {
    page.passengers.verifyUrl()
    page.passengers.setAdultsCount('3')
    page.passengers.verifyAdultsCount('3')
  })

  it('can change children count', () => {
    page.passengers.setChildrenCount('1')
    page.passengers.verifyChildrenCount('1')
  })
})
