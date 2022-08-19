import {teamsiteLogin} from "../../../fixtures/AppActions/TeamSiteLogin.js"
import {validateTabInGameDetails} from "../../../fixtures/AppActions/Games.js"

describe('NBA Game', () => {

      var game='Golden State Warriors'

      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should validate the NBA games stats are visible", () => {
        validateTabInGameDetails(game)
      })
 });