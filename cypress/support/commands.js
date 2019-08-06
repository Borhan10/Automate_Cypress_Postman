Cypress.Commands.add('pressSearchButton', (options) => {
    cy.visit('https://www.bergfreunde.eu/')
    
        cy.get('[class=searchbox]').click('topRight');
  });
  Cypress.Commands.add('enterSearchValue', (options) => {
    cy.fixture('searchData.json').then((data) => {
    cy.get('[name=searchparam]').type(data.searchItem);
     }); 
  });

  Cypress.Commands.add('pressEnter', (options) => {
    cy.get('[name=searchparam]').type('{enter}')
    
  });
  Cypress.Commands.add('selectFirstItem', (options) => {
    cy.get('ul[id="product-list"] li:first').click()
    
  });

  

  Cypress.Commands.add('selectColor', (options) => {
    cy.get('ul[id="js-varlist-color"] li:first').click()    
  });
  
  Cypress.Commands.add('selectSize', (options) => {
    cy.get('ul[id="js-varlist-size"] li:first').click()
    
  });
  
  Cypress.Commands.add('addToCart', (options) => {
    cy.get('span[class="a-icon a-button__icon a-button__icon--cart a-button__icon--first"]').click()
  });

  Cypress.Commands.add('goToCart', (options) => {
    cy.get('button[title="go to cart"]').click()
  });

  Cypress.Commands.add('goToCheckout', (options) => {
    cy.get('button[class="a-button a-button--green a-button--large right"]:first').click()
  });