import Header from "../Locators/Header.js"
import Comparison from "../Locators/ComparisonPage.js"

//Reusable user actions to chain them to form e2e flow
export const viewComparisonReport = (teamA,teamB) => {
        cy.get(Comparison.COM_ADD_TEAM).click().wait(6000)
          .get(Comparison.COM_TEAM_SRCH_LIST_ITEM).contains(teamA).click()
          .get(Comparison.COM_ADD_TEAM).click()
          .get(Comparison.COM_TEAM_SRCH_LIST_ITEM).contains(teamB).click().wait(5000)
          .get(Comparison.COM_STATS_GRID).should('be.visible')
}

export const addMoreStat = (statName) => {
    cy.get(Comparison.COM_ADD_STATS).click()
      .get(Comparison.COM_ADD_STATS_ITEMS).contains(statName).click()
      .get(Comparison.COM_STATS_GRID).should('include.text',statName)
}

export const removeStat = (statName) => {
    cy.get(Comparison.COM_ADD_STATS).click()
      .get(Comparison.COM_ADD_STATS_ITEMS).contains(statName).then(($elem)=>{
        cy.wrap($elem).click().should('not.exist')
      })
}