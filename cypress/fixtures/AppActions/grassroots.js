import Grassroots from "../Locators/grassroots.js"

//Reusable user actions to chain them to form e2e flow

export const selectEvent = (event) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const selectDivision = (division) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const selectTeam = (team) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const selectEntry = (option) => {
        cy.get(Grassroots.GRASS_EVENT).click({multiple:true})
        cy.get(Grassroots.GRASS_EVENT_OPTIONS).contains(event).click()
}

export const validatePlayer = (player) => {
    const arr = player.split('  ')
//    const text =
    console.log(cy.get(Grassroots.GRASS_TABLE_ROWS).contains(arr[0]).invoke('text'))

//    contains("td",arr[0])
//      .invoke("index")
//          .then((index) => {
//            cy.contains("td",arr[1])
//            .invoke('text')
//            .should('eq',arr[1])
//            .and('eq',arr[2])
//            .and('eq',arr[3])
//    })


}