import GamePage from "../Locators/GamePage.js"

//Reusable user actions to chain them to form e2e flow

export const selectGame = (game) => {
        cy.get(GamePage.GAMES_LIST).contains(game).click({force: true})
}

export const validateTabInGameDetails = (tabNames) => {
        var i=0;
        cy.get(GamePage.GAMES_DET_TABS).each((item, index, list) => {
           for(;i<=tabNames.length-1;) {
               cy.wrap(item).should('include.text',tabNames[i])
               i++;
               break;
           }
        })
}

export const validateDataInTab = (tabName, threshold) => {
        cy.get(GamePage.GAMES_DET_TABS).contains(tabName).then(($elem) => {
              cy.wrap($elem).click({force: true}).wait(6000)
              cy.compareSnapshot(tabName, threshold)
        })
}

export const clickTeamFromHeader = (team) => {
    cy.get(GamePage.GAMES_HEADER_TEAMS).contains(team).click()
      .get('.text-2xl').should('have.text',team)
      .go('back')
}

export const clickPlayerFromStats = (player) => {
    cy.get(GamePage.GAMES_TEAM_PLAYERS).contains(player).click({force:true})
      .get('.text-2xl').should('have.text',player)
      .go('back')
}