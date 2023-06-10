import Login from '../pageObjects/loginPage'

describe('Verify login page', { testIsolation: true }, () => {
    let login

    before(() => {
        login = new Login()
    })

    it('Validate login page content', () => {
        // Navigate to the specified url and validate page title
        login.navigateToURLandVeifyTitle('https://www.saucedemo.com/', 'Swag Labs')
    })
})
