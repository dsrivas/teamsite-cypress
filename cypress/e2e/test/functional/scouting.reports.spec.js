import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {openAnalyticsPage} from "../../../fixtures/AppActions/ScoutingReports.js"
import {viewComparisonReport,addMoreStat,removeStat, validateDataWithHeaderEvents} from "../../../fixtures/AppActions/Comparison.js"

describe('Analytics -> Comparison check ', () => {
    const teams = ['Golden State Warriors','New Orleans Pelicans']
    const stat = 'Steals'

    beforeEach(() => {
       cy.visit(Cypress.env('URL'))
       teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
    })

    it('User should be able to validate comparison report and add/remove more stats', ()=>{
        openAnalyticsPage('Comparison')
        viewComparisonReport(teams[0],teams[1])
        addMoreStat(stat)
        removeStat(stat)
    })

    it('User should be able to validate stat changes based on Possessions events selection', ()=>{
        openAnalyticsPage('Comparison')
        viewComparisonReport(teams[0],teams[1])
        validateDataWithHeaderEvents('Possessions:')
    })
})