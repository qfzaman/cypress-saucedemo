import Login from '../pageObjects/loginPage'

describe('Verify login page', { testIsolation: true }, () => {
    let login

    before(() => {
        login = new Login()
    })

    it('Login', () => {
        login.navigateToURLandVeifyTitle('https://www.saucedemo.com/', 'Swag Labs')
        login.inputUsername('standard_user')
        login.inputPassword('secret_sauce')
        login.clickLogin('Products')
    })
})
