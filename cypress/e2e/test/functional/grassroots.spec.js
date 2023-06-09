import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {validateLeaderboardsPage, searchAndSelect,
        selectReportType, verifyDownloadReports, validatePossessionStats} from "../../../fixtures/AppActions/leaderboards.js"

describe('Leaderboards Tab overview check', () => {

      const team = 'Alabama Fusion 15U'
      const event = '2021 NIKE EYBL'
      const player = 'Khaman Maluach South Sudan	71 C 2025	Africa'
      const division = '15U'

      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

     it("Player Details can be viewed from Grassroots",() => {
        selectEvent(event)
        selectDivision(division)
        selectTeam(team)
        validatePlayer(player)
        selectClick(player)
        validatePlayerPage()
     })

})