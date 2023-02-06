import GamePage from "../Locators/GamePage.js"
import GamesFilter from "../Locators/GamesFilter.js"

//Reusable user actions to chain them to form e2e flow

export const selectGame = (team) => {
        cy.get(GamePage.GAMES_LIST).contains(team[0]+team[1]).click({multiple:true})
}

export const validateTabInGameDetails = (tabNames) => {
        var i=0;
        cy.get(GamePage.GAMES_DET_TABS).each((item, index, list) => {
           for(;i<=tabNames.length-1;) {
               cy.wrap(item).should('include.text',tabNames[i])
               i++;
               break;
           }
        })
}

export const validateDataInTab = (tabName, threshold) => {
        cy.get(GamePage.GAMES_DET_TABS).contains(tabName).then(($elem) => {
              cy.wrap($elem).click({force: true}).wait(4000)
              cy.get("[header='"+tabName+"']").compareSnapshot(tabName, threshold)
        })
}

export const clickTeamFromHeader = (team) => {
    cy.get(GamePage.GAMES_HEADER_TEAMS).contains(team).click({force:true})
      .get('.text-2xl').should('include.text',team)
      .go('back')
}

export const clickPlayerFromStats = (player) => {
    cy.get(GamePage.GAMES_TEAM_PLAYERS).contains(player).click({force:true})
      .get('.text-2xl').should('include.text',player)
      .go('back')
}

export const clickTeamStats = (team) => {
    cy.get(GamePage.GAMES_EXTBX_TEAM_STATS).contains(team).click({force:true})
      .get('.flex-col > label').should('include.text','Golden State Warriors Starters')
                               .and('include.text','Golden State Warriors Bench')
}

export const teamSearch = (team) => {
    cy.get(GamePage.GAMES_SEARCH_BOX).click({force:true}).type(team)
}

export const validateClips = (links) => {
    var i=0;
    cy.get(GamePage.GAMES_HEADER_TXT_LINKS).each(($item, index, list) => {
        for(;i<=links.length-1;) {
           cy.wrap($item).should('include.text',links[i]).click({force:true})
           cy.get('.popover').compareSnapshot(links[i], 0.18)
           cy.get(GamePage.GAMES_VIDEO_PLAYER_BTNS).contains('Cancel').click({force:true})
           i++;
           break;
        }
    })
}

export const validateFutureGames = () => {
    cy.get(GamePage.GAMES_LIST).first().should('include.text','Future game (coming soon)')
}

export const selectFilters = (league, season) => {
    selectFilter('League:', league)
    selectFilter('Season:', season)
}

export const selectFilter = (item, value) => {
    cy.wait(4000).get(GamesFilter.GAME_FILTER_COMBOS).contains(item).then(($elem)=> {
        cy.wrap($elem).parent().find("[griditemheightclass='h-full min-h-3']").dblclick()
        cy.get(GamesFilter.GAMES_FILTER_VAL_OPTIONS).contains(value).click({force:true})
    })
}