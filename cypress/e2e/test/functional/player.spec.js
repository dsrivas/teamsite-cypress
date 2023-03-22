import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {clickTab} from "../../../support/commands.js"
import {playerSearch, expandStats, validateStats} from "../../../fixtures/AppActions/player.js"

describe('Player tab overview check', () => {

      const teams = ['Golden State Warriors','New Orleans Pelicans']
      const player = 'Precious Achiuwa'


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should be able navigate and view Player stats page", () => {
         cy.clickTab('Player')
         playerSearch(player)
         cy.wait(4000).clickTab('Play Types')
         expandStats('Play Types','P&R Ball Handler')
         validateStats('Play Types')
         validateStats('Overall Drive Direction')
      })

 })