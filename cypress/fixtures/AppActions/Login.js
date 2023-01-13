import Login from "../Locators/Login.js"

export const teamsiteLogin = (username,password) => {
        cy.get(Login.LOGIN_USERNAME_TXT).click().type(username)
        cy.get(Login.LOGIN_PASSWORD_TXT).click().type(password)
        cy.get(Login.LOGIN_SUBMIT_BTN).contains('Login').click()
}