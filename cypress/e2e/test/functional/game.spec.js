import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {selectGame, validateTabInGameDetails, validateDataInTab, clickTeamFromHeader
        ,clickPlayerFromStats, clickTeamStats, teamSearch, validateClips
        ,selectFilters,validateFutureGames} from "../../../fixtures/AppActions/Games.js"

describe('Game Tab overview check', () => {

      const teams = ['Golden State Warriors','New Orleans Pelicans']
      const tabs = ['Extended Box Score','Play Types','Play by Play','Game Breakdown','Shot Chart','Lineups']
      const player = 'Jordan Poole '
      const clips = ['All Clips','All Possessions','Full Game Video']
      const league = 'NBA'
      const season = '2022-2023'


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
      })

      it("Should be able navigate to Teams and Player tabs from Stats page", () => {
        teamSearch(teams[1])
        selectGame(teams)
        clickTeamStats('GoldenState')
        clickTeamFromHeader(teams[0])
        clickPlayerFromStats(player)
      })

      it("User should be able navigate to view future games", () => {
        selectFilters(league, season)
        validateFutureGames()
      })
 });