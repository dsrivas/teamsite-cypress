import Leaderboards from "../Locators/leaderboards.js"

export const validateTeamsLeaderboards = (reportType) => {
        cy.get(Leaderboards.LEADER_HEADER).find('.ng-value-container .ng-value-label').should('have.text',reportType)
        cy.get('.ts-header-row').should('include.text', 'Team')
}

export const searchAndSelectTeam = (team) => {
    cy.get(Leaderboards.LEADER_SEARCH_BOX).clear().type(team)
    cy.get(Leaderboards.LEADER_RESULT_ROWS).should('include.text',team)
    cy.get(Leaderboards.LEADER_RESULT_ROWS).contains(team).click()
    cy.wait(4000).url().should('contain','teams')
}

export const selectReportType = (reportType) => {
    cy.get(Leaderboards.LEADER_HEADER).find('.ng-value-container').contains('Team').click({force: true})
    cy.wait(2000).get('.ng-dropdown-panel-items .ng-option-label').contains(reportType).click()
}

export const verifyDownloadReports = (format, filename) => {
    cy.get(Leaderboards.LEADER_EXPORT_BTNS).contains(format).click().wait(2000)
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.wait(4000).readFile(downloadsFolder+"/"+filename+" - NBA 2021-2022 All excluding Exhibitions - Overall - Team Defensive." + format.toLowerCase()).should("exist")
}

export const validatePossessionStats = (team, type, stat, value) => {
    cy.get(Leaderboards.LEADER_SEARCH_BOX).clear().type(team)
    if(type === 'Total'){
        cy.get('.toggle-root').contains('Possessions:').then(($elem) =>{
           cy.wrap($elem).parent().find('.ts-toggle-slider').click()
        })
    }
    cy.contains("th",stat)
      .invoke("index")
      .then((index) => {
      cy.contains("td",value)
        .invoke('text')
        .should('eq',value)
    })
}