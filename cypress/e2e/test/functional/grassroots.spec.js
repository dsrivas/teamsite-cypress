import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {clickTab} from "../../../support/commands.js"
import {selectEvent, validatePlayer} from "../../../fixtures/AppActions/grassroots.js"

describe('Leaderboards Tab overview check', () => {

      var team
      var event
      var player
      var division

      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

     it("Player positions can be viewed under 2021 Nike EYBL",() => {
          event = '2022-23 NBA ACADEMY'
          player = 'Khaman Maluach  South  Sudan  C  2025  Africa'

          cy.clickTab('Grassroots')
          selectEvent(event)
          validatePlayer(player)
//          selectClick(player)
//          validatePlayerPage()
     })

//     it("Player positions can be viewed under 2021 Nike EYBL",() => {
//        event = '2021 NIKE EYBL'
//        division = '15U'
//        team = 'Alabama Fusion 15U'
//        player = 'Khaman Maluach South Sudan	71 C 2025	Africa'
//
//        selectEvent(event)
//        selectDivision(division)
//        selectTeam(team)
//        validatePlayer(player)
//        selectClick(player)
//        validatePlayerPage()
//     })

})