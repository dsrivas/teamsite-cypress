import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {selectGame, validateTabInGameDetails, validateDataInTab, clickTeamFromHeader
        ,clickPlayerFromStats, clickTeamStats} from "../../../fixtures/AppActions/Games.js"

describe('NBA Game', () => {

      const teams = ['Golden State Warriors','New Orleans Pelicans']
      const tabs = ['Extended Box Score','Play Types','Play by Play','Game Breakdown','Shot Chart','Lineups']
      const player = 'Jordan Poole '


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should validate the different tab and stats are visible under Game", () => {
        selectGame(teams)
        validateTabInGameDetails(tabs)
        validateDataInTab('Extended Box Score', 0.3)
        validateDataInTab('Game Breakdown', 0.49)
        validateDataInTab('Play Types', 0.30)
        validateDataInTab('Play by Play', 0.32)
        validateDataInTab('Shot Chart', 0.25)
        validateDataInTab('Lineups', 0.25)
      })

      it("Should be able to navigate to Teams and Player tabs from Stats page", () => {
        selectGame(teams)
        clickTeamStats('GoldenState')
        clickTeamFromHeader(teams[0])
        clickPlayerFromStats(player)
      })
 });