import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {validateLeaderboardsPage, searchAndSelect,
        selectReportType, verifyDownloadReports, validatePossessionStats} from "../../../fixtures/AppActions/leaderboards.js"

describe('Leaderboards Tab overview check', () => {

      const team = 'Golden State Warriors'
      const player = 'Precious Achiuwa'
      const filename = 'Leaderboards'
      const format = ["XLSX","CSV"]


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Leaderboard stats can be downloaded from Teams leaderboard page", () => {
        cy.openSubHeader('Leaderboards','Team Leaderboards')
        validateLeaderboardsPage('Team Offensive')
        selectReportType('Team Defensive')
        format.forEach((item) =>{
          verifyDownloadReports(item,filename)
        })
      })

      it("Stats can be viewed under Team leaderboards", () => {
        cy.openSubHeader('Leaderboards','Team Leaderboards')
        validateLeaderboardsPage('Team Offensive')
        selectReportType('Team Defensive')
        validatePossessionStats(team,'Possession','Poss', '109.6')
        validatePossessionStats(team,'Total','Poss', '10,933')
        searchAndSelect('Team',team)
      })

      it("Leaderboard stats can be downloaded from Players leaderboard page", () => {
        cy.openSubHeader('Leaderboards','Player Leaderboards')
        validateLeaderboardsPage('Player Offensive')
        selectReportType('Player Defensive')
        format.forEach((item) =>{
           verifyDownloadReports(item,filename)
        })
      })

      it("Stats can be viewed under Player leaderboards", () => {
        cy.openSubHeader('Leaderboards','Player Leaderboards')
        validateLeaderboardsPage('Player Offensive')
        selectReportType('Player Defensive')
        validatePossessionStats(player,'Possession','Poss', '8.4')
        validatePossessionStats(player,'Total','Poss', '454')
        searchAndSelect('Player',player)
      })

})