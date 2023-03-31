import Header from "../Locators/header.js"
import Player from "../Locators/player-page.js"

//Reusable user actions to chain them to form e2e flow
export const playerSelect = (player) => {
     cy.get(Player.PLAYER_TABLE_ROW).contains(player).click()
}

export const playerSearch = (player) => {
     cy.wait(10000).get(Player.PLAYER_SEARCH_BOX).first().click({force:true}).type(player)
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

export const selectClip = (clipPos) => {
    cy.get(Player.PLAYER_TABLE_ROW).contains(clipPos).then(($elem) => {
        cy.wrap($elem).click()
    })
    cy.get('[type="button"]').contains('OK').click()
}

export const validateClipReplay = () => {
    cy.compareSnapshot("Web Editor",0.18)
}
