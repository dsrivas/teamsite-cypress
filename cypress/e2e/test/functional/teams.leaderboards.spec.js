import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {validateTeamsLeaderboards, searchAndSelectTeam,
        selectReportType, verifyDownloadReports, validatePossessionStats} from "../../../fixtures/AppActions/leaderboards.js"

describe('Game Tab overview check', () => {

      const team = 'Golden State Warriors'
      const filename = 'Leaderboards'
      const format = ["XLSX","CSV"]


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Leaderboard stats can be downloaded from Teams leaderboard page", () => {
        cy.openSubHeader('Leaderboards','Team Leaderboards')
        validateTeamsLeaderboards('Team Offensive')
        selectReportType('Team Defensive')
        format.forEach((item) =>{
          verifyDownloadReports(item,filename)
        })
      })

      it("Stats can be viewed under Team leaderboards", () => {
        cy.openSubHeader('Leaderboards','Team Leaderboards')
        validateTeamsLeaderboards('Team Offensive')
        selectReportType('Team Defensive')
        validatePossessionStats(team,'Possession','Poss', '109.6')
        validatePossessionStats(team,'Total','Poss', '11,399')
        searchAndSelectTeam(team)
      })

})