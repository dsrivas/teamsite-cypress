import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {openAnalyticsPage} from "../../../fixtures/AppActions/ScoutingReports.js"
import {viewComparisonReport,addMoreStat,removeStat} from "../../../fixtures/AppActions/Comparison.js"

describe('NBA Game', () => {
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

    it('User should be able to validate that Future comparison report and add/remove more stats', ()=>{
        openAnalyticsPage('Comparison')
        viewComparisonReport(teams[0],teams[1])
        addMoreStat(stat)
        removeStat(stat)
    })
})