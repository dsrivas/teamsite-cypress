import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {clickTab} from "../../../support/commands.js"
import {playerSearch, expandStats, validateStats} from "../../../fixtures/AppActions/player.js"

describe('Player tab overview check', () => {

      const player = 'Precious Achiuwa'
      const playTypes = ['P&R Ball Handler - Overall','Left P&R', 'High P&R', 'Right P&R']
      const overallDriveDirection = ['Drives Left','Drives Right','Drives Straight']


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should be able navigate and view Player stats page", () => {
         cy.clickTab('Player')
         playerSearch(player)
         cy.wait(4000).clickTab('Play Types')
         expandStats('Play Types','P&R Ball Handler')
         validateStats(playTypes)
         validateStats(overallDriveDirection)
      })

 })