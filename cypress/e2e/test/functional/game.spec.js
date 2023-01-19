import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {selectGame, validateTabInGameDetails, validateDataInTab, clickTeamFromHeader
        ,clickPlayerFromStats} from "../../../fixtures/AppActions/Games.js"

describe('NBA Game', () => {

      const game='Golden State Warriors'
      const tabs = ['Extended Box Score','Play Types','Play by Play','Game Breakdown','Shot Chart','Lineups']
      const team = 'Golden State Warriors'
      const player = 'Jordan Poole '


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should validate the different tab and stats are visible under Game", () => {
        selectGame(game)
        validateTabInGameDetails(tabs)
        validateDataInTab('Extended Box Score', 0.3)
        validateDataInTab('Game Breakdown', 0.60)
        validateDataInTab('Play Types', 0.30)
        validateDataInTab('Play by Play', 0.31)
        validateDataInTab('Shot Chart', 0.30)
        validateDataInTab('Lineups', 0.30)
      })

      it("Should be able to navigate to Teams and Player tabs from Stats page", () => {
        selectGame(game)
        clickTeamFromHeader(team)
        clickPlayerFromStats(player)
      })

 });