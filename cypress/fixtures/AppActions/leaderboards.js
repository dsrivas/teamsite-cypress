import Leaderboards from "../Locators/leaderboards.js"

export const validateTeamsLeaderboards = (reportType) => {
        cy.get(Leaderboards.LEADER_HEADER).find('.ng-value-container .ng-value-label').should('have.text',reportType)
        cy.get('.ts-header-row').should('include.text', 'Team')
}

export const searchAndSelectTeam = (team) => {
    cy.get(Leaderboards.LEADER_SEARCH_BOX).type(team)
    cy.get(Leaderboards.LEADER_RESULT_ROWS).should('include.text',team)
    cy.get(Leaderboards.LEADER_RESULT_ROWS).contains(team).click()
    cy.wait(4000).url().should('contain','teams')
}

export const selectReportType = (reportType) => {
    cy.get(Leaderboards.LEADER_HEADER).find('.ng-value-container').contains('Team').click({force: true})
    cy.get('.ng-option-label').contains(reportType).click()
}

export const verifyDownloadReports = (format, filename) => {
    cy.get(Leaderboards.LEADER_EXPORT_BTNS).contains(format).click().wait(2000)
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.wait(4000).readFile(downloadsFolder+"/"+filename+" - NBA 2021-2022 All excluding Exhibitions - Overall - Team Defensive." + format.toLowerCase()).should("exist")
}