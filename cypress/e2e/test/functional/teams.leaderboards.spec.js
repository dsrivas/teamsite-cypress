import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {validateTeamsLeaderboards, searchAndSelectTeam, selectReportType} from "../../../fixtures/AppActions/leaderboards.js"

describe('Game Tab overview check', () => {

      const team = 'Golden State Warriors'
      const tabs = ['Extended Box Score','Play Types','Play by Play','Game Breakdown','Shot Chart','Lineups']
      const player = 'Jordan Poole '
      const clips = ['All Clips','All Possessions','Full Game Video']
      const league = 'NBA'
      const season = '2022-2023'


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Stats can be viewed under Team leaderboards", () => {
        cy.openSubHeader('Leaderboards','Team Leaderboards')
        validateTeamsLeaderboards('Team Offensive')
        selectReportType('Team Defensive')
        searchAndSelectTeam(team)
      })

})