import {teamsiteLogin} from "../../../fixtures/AppActions/Login.js"
import {selectGame, validateTabInGameDetails} from "../../../fixtures/AppActions/Games.js"

describe('NBA Game', () => {

      const game='Golden State Warriors'
      var player = ''
      const tabs = ['Extended Box Score','Play Types','Play by Play','Game Breakdown','Shot Chart','Lineups']


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should validate the NBA games stats are visible", () => {
        selectGame(game)
        validateTabInGameDetails(tabs)
        cy.compareSnapshot('Game',0.18)
      })
 });