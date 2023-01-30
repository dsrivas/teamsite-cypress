import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {selectGame, validateTabInGameDetails, validateDataInTab, clickTeamFromHeader
        ,clickPlayerFromStats, clickTeamStats, teamSearch, validateClips} from "../../../fixtures/AppActions/Games.js"

describe('NBA Game', () => {

      const teams = ['Golden State Warriors','New Orleans Pelicans']
      const tabs = ['Extended Box Score','Play Types','Play by Play','Game Breakdown','Shot Chart','Lineups']
      const player = 'Jordan Poole '
      const clips = ['All Clips','All Possessions','Full Game Video']


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should validate the different tab and stats are visible under Game", () => {
        //Search for Golder State warriors team
        teamSearch(teams[1])
        selectGame(teams)
        validateClips(clips)
        validateTabInGameDetails(tabs)
        validateDataInTab('Extended Box Score', 0.30)
        validateDataInTab('Shot Chart', 0.18)
        validateDataInTab('Lineups', 0.25)
      })

      it("Should be able navigate to Teams and Player tabs from Stats page", () => {
        teamSearch(teams[1])
        selectGame(teams)
        clickTeamStats('GoldenState')
        clickTeamFromHeader(teams[0])
        clickPlayerFromStats(player)
      })
 });