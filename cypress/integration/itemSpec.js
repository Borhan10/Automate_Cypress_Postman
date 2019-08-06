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

  it('Should check for the item price', () => {
        cy.get('[data-codecept="productPrice"]')
        .find('.js-fprice')
        .invoke('text')
        .then(text => {
        const price = text;
        cy.writeFile('cypress/fixtures/price.json',{ price: '€ '+price } )
        expect(price).to.not.equal('0')

        })
            
    });

    it('Should get for the item title', () => {
   
        cy.get('span[class="product-title"]')
        .invoke('text')
        .then(text => {
        const title = text;
        cy.writeFile('cypress/fixtures/productTitle.json',{ title:' '+ title } )
        expect(title).to.not.equal(' ')

        })
    });



    it('Should check for the item weight', () => {
        cy.get('dl[class="attributes"')
        .find('dt')
        .should(($weight)=>{
        expect($weight).to.contain('Weight:')    
        })
     
    });



    it('Should check for the item return policy ', () => {
        cy.get('ul[class="details-advantages-snippet"').contains('30 days returns policy')
        .should(($reurnPolicy)=>{
            expect($reurnPolicy).to.contain('30 days returns policy')
        })
       
    });



    it('Should check for at least 1 user review available', () => {
        cy.get('span[itemprop="reviewCount"]')
        .invoke('text')
        .then(text=>{
        expect(text).to.not.equal('0') 
        })
    });


});


