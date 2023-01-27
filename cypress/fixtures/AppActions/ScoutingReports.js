import Header from "../Locators/Header.js"
import Scouting from "../Locators/ScoutingPage.js"

//Reusable user actions to chain them to form e2e flow
export const openAnalyticsPage = (page) => {
        cy.get(Header.HEADER_TAB).contains('Analytics').trigger('mouseover')
        cy.get('.my-1').contains(page).invoke('show').click({force:true})
}