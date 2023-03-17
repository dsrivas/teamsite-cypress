import Header from "../Locators/Header.js"
import Scouting from "../Locators/ScoutingPage.js"

//Reusable user actions to chain them to form e2e flow
export const openAnalyticsPage = (page) => {
        cy.get(Header.HEADER_TAB).contains('Analytics').trigger('mouseover')
        cy.get('.my-1').contains(page).invoke('show').click({force:true})
}

export const showScoutingReport = (teamA, teamB) => {
        cy.get(Scouting.SCOUTING_TEAM_SELECTION).first()
            .should('have.class','team-selection-team-selected')
        cy.get(Scouting.SCOUTING_TEAM_LST_ITEM).contains(teamA).click()
        cy.get(Scouting.SCOUTING_TEAM_LST_ITEM).contains(teamB).click()
        cy.get(Scouting.SCOUTING_SHOW_REPORT).click()
}

export const validateScoutingReport = (tabName) => {
//    cy.get(Scouting.SCOUTING_TEAMS_VIEW).should('have.text',teamA+TeamB)
    cy.get(Scouting.SCOUTING_REPORT_TABS).contains(tabName).click()
    cy.wait(3000).get('.possessions').compareSnapshot("Summary",0.25)
}
