describe('itemSpec', () => {
    beforeEach(() => {
        cy.pressSearchButton()
        cy.enterSearchValue()
        cy.pressEnter()
        cy.wait(5000);
        cy.selectFirstItem()
        cy.selectColor()
        cy.selectSize()
      });

  it('Check for the item price', () => {    // Check the price of the item and save it for next check in cart 
        cy.get('[data-codecept="productPrice"]')
        .find('.js-fprice')
        .invoke('text')
        .then(text => {
        const price = text;
        cy.writeFile('cypress/fixtures/price.json',{ price: '€ '+price } )
        expect(price).to.not.equal('0')

        })
            
    });

    it('Check Get for the item title', () => {     // Check the title of the item and save it for next check in cart
        cy.get('span[class="product-title"]')
        .invoke('text')
        .then(text => {
        const title = text;
        cy.writeFile('cypress/fixtures/productTitle.json',{ title:' '+ title } )
        expect(title).to.not.equal(' ')

        })
    });



    it('Check for the item weight', () => {    // Check that weight displayed 
        cy.get('dl[class="attributes"')
        .find('dt')
        .should(($weight)=>{
        expect($weight).to.contain('Weight:')    
        })
     
    });



    it('Check for the item return policy ', () => {   // Check return policy displayed
        cy.get('ul[class="details-advantages-snippet"').contains('30 days returns policy')
        .should(($reurnPolicy)=>{
            expect($reurnPolicy).to.contain('30 days returns policy')
        })
       
    });



    it('Check for at least 1 user review available', () => {   // Check that number of users review is more than 0
        cy.get('span[itemprop="reviewCount"]')
        .invoke('text')
        .then(text=>{
        expect(text).to.not.equal('0') 
        })
    });


});


