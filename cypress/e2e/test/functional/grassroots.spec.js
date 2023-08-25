import {teamsiteLogin} from "../../../fixtures/AppActions/login.js"
import {clickTab} from "../../../support/commands.js"
import {selectEvent, selectDivision, selectTeam, validatePlayer, selectPlayer, validatePlayerPage} from "../../../fixtures/AppActions/grassroots.js"

describe('Leaderboards Tab overview check', () => {

      var playerStat
      var team
      var event
      var player
      var division

      beforeEach(() => {
        cy.visit(Cypress.env('URL'))
        teamsiteLogin(Cypress.env('USERNAME_TEAM'),Cypress.env('PASSWORD_TEAM'))
      })

     it("Player positions can be viewed under 2022-23 NBA Academy",() => {
          event = '2022-23 NBA ACADEMY'
          playerStat = 'Augusto Cassia  Brazil  SF  2023  Global'
          player = 'Augusto Cassia'

          cy.clickTab('Grassroots')
          selectEvent(event)
          validatePlayer(playerStat)
          selectPlayer(player)
          validatePlayerPage()
     })

     it("Player positions can be viewed under 2021 Nike EYBL",() => {
        event = '2021 NIKE EYBL'
        division = '15U'
        team = 'Alabama Fusion 15U'
        player = 'Tommy Tisdale'

        cy.clickTab('Grassroots')
        selectEvent(event)
        selectDivision(division)
        selectTeam(team)
        selectPlayer(player)
        validatePlayerPage()
     })

})