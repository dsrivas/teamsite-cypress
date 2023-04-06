import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {clickTab} from "../../../support/commands.js"
import {playerSelect, playerSearch, expandStats, validateStats, selectValidateClip} from "../../../fixtures/AppActions/player.js"

describe('Player tab overview check', () => {

      const player = 'Precious Achiuwa'
      const playTypes = ['P&R Ball Handler - Overall','Left P&R', 'High P&R', 'Right P&R']
      const overallDriveDirection = ['Drives Left','Drives Right','Drives Straight']
      const overall = ['All Possessions','Transition','Overall Half Court','Out of Bounds (End)','Out of Bounds (Side)','After Time Outs',
                       'Last 4 Sec. of Shot Clock','Against Man','Against Zone','Press','To Transition','To Half Court']
      const shotTypes = ['All Field Goal Attempts','Jump Shot','Catch and Shoot','Guarded','Unguarded','Dribble Jumper','Early Jumper',
                        'Runner','Hook','At Rim','Layup','Dunk','Tip']


      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

      it("Should be able to navigate and view Player stats i.e. Overall, Play Types, Shot Types", () => {
         cy.clickTab('Player')
         playerSelect(player)
         validateStats(overall)
         cy.wait(4000).clickTab('Play Types')
         expandStats('Play Types','P&R Ball Handler')
         validateStats(playTypes)
         validateStats(overallDriveDirection)
         cy.wait(4000).clickTab('Shot Types')
         validateStats(shotTypes)
      })

      it("Should be able to search and play clip from Players page", () => {
         cy.clickTab('Player')
         playerSearch(player)
         selectValidateClip('132')
      })
 })