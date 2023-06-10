class Login {
    navigateToURLandVeifyTitle(url, title) {
        cy.visit(url)
        cy.title().should('eq', title)
    }

    inputUsername(username) {
        cy.get('[data-test="username"]').type(username)
    }

    inputPassword(username) {
        cy.get('[data-test="password"]').type(username)
    }

    clickLogin(pageTitle) {
        cy.get('[data-test="login-button"]').click()
        cy.get('.title').should('contain', pageTitle)
    }
}

export default Login
