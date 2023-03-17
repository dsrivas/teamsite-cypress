import Header from "../Locators/header.js"
import Player from "../Locators/player-page.js"

//Reusable user actions to chain them to form e2e flow
export const playerSearch = (player) => {
     cy.get(Player.PLAYER_TABLE_ROW).contains(player).click()
}

export const expandStats = (section, stats) => {
     cy.wait(4000).get('.text-section-headline').contains(section).then(($elem) => {
        cy.wait(8000).wrap($elem).find(Player.PLAYER_DET_TAB_ROW).contains(stats).click()
     })
}

export const validateStats = (stats) => {
    cy.get('.text-section-headline').contains(stats).compareSnapshot('Possessions', 0.18)
}
