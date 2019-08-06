Cypress.Commands.add('pressSearchButton', (options) => {    // Pres search button
    cy.visit('https://www.bergfreunde.eu/')
    
        cy.get('[class=searchbox]').click('topRight');
  });
  Cypress.Commands.add('enterSearchValue', (options) => {    // get the search value from user 
    cy.fixture('searchData.json').then((data) => {
    cy.get('[name=searchparam]').type(data.searchItem);
     }); 
  });

  Cypress.Commands.add('pressEnter', (options) => { // make search for user input
    cy.get('[name=searchparam]').type('{enter}')
    
  });
  Cypress.Commands.add('selectFirstItem', (options) => { // select first item in the search results
    cy.get('ul[id="product-list"] li:first').click()
    
  });

  

  Cypress.Commands.add('selectColor', (options) => {       // select color for the selected item
    cy.get('ul[id="js-varlist-color"] li:first').click()    
  });
  
  Cypress.Commands.add('selectSize', (options) => {        // select size for the selected item
    cy.get('ul[id="js-varlist-size"] li:first').click()
    
  });
  
  Cypress.Commands.add('addToCart', (options) => {         // add item to cart
    cy.get('span[class="a-icon a-button__icon a-button__icon--cart a-button__icon--first"]').click()
  });

  Cypress.Commands.add('goToCart', (options) => {         // go to cart page
    cy.get('button[title="go to cart"]').click()
  });

  Cypress.Commands.add('goToCheckout', (options) => {      // got to checkout page
    cy.get('button[class="a-button a-button--green a-button--large right"]:first').click()
  });