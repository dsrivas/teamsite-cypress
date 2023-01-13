import GamePage from "../Locators/GamePage.js"

//Reusable user actions to chain them to form e2e flow

export const selectGame = (game) => {
        cy.get(GamePage.GAMES_LIST).contains(game).click({force: true})
}

export const validateTabInGameDetails = (tabNames) => {
        var i=0;
        cy.get(GamePage.GAMES_DET_TABS).each((item, index, list) => {
           for(;i<=tabNames.length;) {
               cy.wrap(item).should('include.text',tabNames[i])
               i++;
               break;
           }
        })
        cy.contains('.boxscore-table','Jordan Poole')
}