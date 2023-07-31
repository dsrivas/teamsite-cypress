import Grassroots from "../Locators/grassroots.js"

export const selectEvent = (event) => {
        cy.get(Grassroots.GRASS_EVENT).contains('Event:').then((elem) => {
            cy.wrap(elem).parent().get('.ng-select-searchable').click({multiple: true})
        })
        cy.wait(3000).get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click({force: true})
}

export const selectDivision = (division) => {
        cy.get(Grassroots.GRASS_EVENT).contains('Division:').then((elem) => {
            cy.wrap(elem).parent().get('.ng-select-searchable').click({multiple: true})
        })
        cy.wait(3000).get(Grassroots.GRASS_EVENT_OPTIONS).contains(division).click({force: true})
}

export const selectTeam = (team) => {
        cy.get(Grassroots.GRASS_EVENT).contains('Team:').then((elem) => {
              cy.wrap(elem).parent().get('.ng-select-searchable').click({multiple: true})
        })
        cy.wait(3000).get(Grassroots.GRASS_EVENT_OPTIONS).contains(team).click({force: true})
}

export const selectEntry = (option) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const validatePlayer = (player) => {
    const arr = player.split('  ')
    cy.contains("td",arr[0])
      .invoke("index")
          .then((index) => {
            cy.contains("td",arr[1])
            .should('have.text',' ' + arr[1] + ' ')
            cy.contains("td",arr[2])
            .should('have.text',' ' + arr[2] + ' ')
            cy.contains("td",arr[3])
            .should('have.text',' ' + arr[3] + ' ')
    })

}

export const selectPlayer = (player) => {
    cy.get(Grassroots.GRASS_TABLE_ROW_LINKS).contains(player).click({force: true})
}

export const validatePlayerPage = () => {
    cy.wait(4000).url().should('contain','players')
}