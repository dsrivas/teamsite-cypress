import Header from "../Locators/header.js"
import Player from "../Locators/player-page.js"

//Reusable user actions to chain them to form e2e flow
export const playerSearch = (player) => {
     cy.get(Player.PLAYER_TABLE_ROW).contains(player).click()
}

export const expandStats = (section, stats) => {
     cy.get('.text-section-headline').contains(section).then(($elem) => {
        cy.wait(10000).wrap($elem).get(Player.PLAYER_DET_TAB_ROW).contains(stats).click({force:true})
     })
}

export const validateStats = (stats) => {
    stats.forEach((item) => {
        cy.get(Player.PLAYER_DET_TAB_ROW).should('include.text', item)
    })
}
