import Header from "../Locators/Header.js"
import Comparison from "../Locators/ComparisonPage.js"

//Reusable user actions to chain them to form e2e flow
export const viewComparisonReport = (teamA,teamB) => {
        cy.get(Comparison.COM_ADD_TEAM).click().wait(6000)
          .get(Comparison.COM_TEAM_SRCH_LIST_ITEM).contains(teamA).click({force:true})
          .get(Comparison.COM_ADD_TEAM).click({force:true})
          .get(Comparison.COM_TEAM_SRCH_LIST_ITEM).contains(teamB).click({force:true}).wait(5000)
          .get(Comparison.COM_STATS_GRID).should('be.visible')
}

export const addMoreStat = (statName) => {
    cy.get(Comparison.COM_ADD_STATS).click()
      .get(Comparison.COM_ADD_STATS_ITEMS).contains(statName).click({force:true})
      .get(Comparison.COM_STATS_GRID).should('include.text',statName)
}

export const removeStat = (statName) => {
    cy.get(Comparison.COM_ADD_STATS).click({force:true})
      .get(Comparison.COM_ADD_STATS_ITEMS).contains(statName).then(($elem)=>{
        cy.wrap($elem).click().should('not.exist')
      })
}

export const selectHeaderEvent = (event) => {
    cy.get("[header='"+event+"']").find('.option-toggle .ng-valid').click({force:true})
}

export const validateDataWithHeaderEvents = (event) => {
    selectHeaderEvent(event)
    cy.wait(4000).get(Comparison.COM_STATS_GRID).contains('Possessions').then(($elem)=> {
        cy.wrap($elem).parents('.items-center').compareSnapshot('Possessions', 0.25)
    })
}

export const selectTeamFilter = (filter, option) => {
    cy.wait(3000).get('.mr-4').contains(filter).then(($elem) => {
        cy.wrap($elem).parent().find(Comparison.COM_SELECT_FILTER).click()
        cy.get(Comparison.COM_SELECT_FILTER_OPT).contains(option).wait(3000).click({multiple:true})
    })
}
