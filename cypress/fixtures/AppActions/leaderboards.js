import Leaderboards from "../Locators/leaderboards.js"

export const validateLeaderboardsPage = (reportType, ) => {
        cy.get(Leaderboards.LEADER_HEADER).find('.ng-value-container .ng-value-label').should('have.text',reportType)
}

export const searchAndSelect = (type, option) => {
    cy.get(Leaderboards.LEADER_SEARCH_BOX).clear({force:true}).type(option)
    cy.get(Leaderboards.LEADER_RESULT_ROWS).should('include.text',option)
    cy.get(Leaderboards.LEADER_RESULT_ROWS).contains(option).click()
    if(type === 'Team')
        cy.wait(4000).url().should('contain','teams')
    else
        cy.wait(4000).url().should('contain','players')
}

export const selectReportType = (reportType) => {
    cy.get(Leaderboards.LEADER_HEADER).find('.ng-value-container').contains('Offensive').click({force: true})
    cy.wait(4000).get('.ng-dropdown-panel-items .ng-option-label').contains(reportType).click()
}

export const verifyDownloadReports = (format, filename) => {
    cy.get(Leaderboards.LEADER_EXPORT_BTNS).contains(format).click().wait(2000)
    const downloadsFolder = Cypress.config("downloadsFolder");
    cy.wait(4000).readFile(downloadsFolder+"/"+filename+" - NBA 2022-2023 All excluding Exhibitions - Overall - Team Defensive." + format.toLowerCase()).should("exist")
}

export const validatePossessionStats = (team, type, stat, value) => {
    cy.get(Leaderboards.LEADER_SEARCH_BOX).clear({force:true,waitForAnimations: true}).type(team)
    if(type === 'Total'){
        cy.get('.toggle-root').contains('Possessions:').then(($elem) =>{
           cy.wrap($elem).parent().find('.ts-toggle-slider').click({force:true})
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