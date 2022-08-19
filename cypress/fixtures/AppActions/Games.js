import LandingPage from "../Locators/LandingPage.js"

//Reusable user actions to chain them to form e2e flow

export const selectGame = (game) => {
        cy.get(LandingPage.GAMES_LIST).contains(game).click({force: true})
}

export const validateTabInGameDetails = (game) => {
        selectGame(game)
        cy.get(".tab-header:first").should('have.text', "Extended Box Score")
        cy.get(".tab-header:last")
            .should('have.class', "text")
            .then(($option) => {
                cy.get($option).click()
            });
}