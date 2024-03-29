import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {showScoutingReport, validateScoutingReport} from "../../../fixtures/AppActions/scouting-reports.js"
import {viewComparisonReport, addMoreStat, removeStat, selectTeamFilter, validateDataWithHeaderEvents} from "../../../fixtures/AppActions/comparison.js"

describe('Analytics -> Comparison check ', () => {
    const teams = ['Golden State Warriors','New Orleans Pelicans']
    const stat = 'Steals'
    const league = 'NBA'
    const season = '2021-2022'
    const competition = 'Pre-Season'

    beforeEach(() => {
       cy.visit(Cypress.env('URL'))
       teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
    })

    it('User should be able to validate comparison report and add/remove more stats', ()=>{
        cy.openSubHeader('Analytics','Comparison')
        viewComparisonReport(teams[0],teams[1])
        addMoreStat(stat)
        removeStat(stat)
    })

    it('User should be able to validate stat changes based on Possessions events selection', ()=>{
        cy.openSubHeader('Analytics','Comparison')
        selectTeamFilter('League',league)
        selectTeamFilter('Season',season)
        selectTeamFilter('Competition',competition)
        viewComparisonReport(teams[0],teams[1])
        validateDataWithHeaderEvents('Possessions:')
    })

    it('User should be able to generate scouting report and validate data with events selection', ()=>{
        cy.openSubHeader('Analytics','Scouting Reports')
        showScoutingReport(teams[0],teams[1])
        validateScoutingReport("Summary")
    })
})