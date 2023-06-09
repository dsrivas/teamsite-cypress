import Grassroots from "../Locators/grassroots.js"

//Reusable user actions to chain them to form e2e flow

export const selectEvent = (event) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const selectDivision = (division) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const selectTeam = (team) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const selectEntry = (option) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}