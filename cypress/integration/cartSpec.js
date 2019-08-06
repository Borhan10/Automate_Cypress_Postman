describe('cartSpec', () => {
    beforeEach(() => {
        cy.pressSearchButton()  
        cy.enterSearchValue()
        cy.pressEnter()
        cy.wait(5000);
        cy.selectFirstItem()
        cy.wait(2000)
        cy.selectColor()
        cy.selectSize()
        cy.addToCart()
        cy.goToCart()
      });
    
    it('Check for the item price in cart', () => {   
        cy.fixture('price.json').then((productDetailPrice) => {     // get the old price from the details item page 
        cy.get('span[class="totalprice padding-left right font-red"]')
        .invoke('text')
        .then(cartPrice=>{
            expect(cartPrice).to.equal(productDetailPrice.price)
        })
        })
    })

    it('Check for the item title in cart', () => {
        cy.fixture('productTitle.json').then((productDetailTitle) => {   // get the old title from product details  
        cy.get('span[class="product--title"]')
        .invoke('text')
        .then(cartTitle=>{
            expect(cartTitle).to.equal(productDetailTitle.title)
        })
        })
    })


    it('Check that voucher code is not available', () => {     // try to check that code doesn't work with invalid code
        cy.get('input[class="vouchercode"]').type("voucher1234")
        cy.get('button[class="a-button a-button--gray right"]').click()
        cy.get('p[class="error font-red"]')
        .invoke('text')
        .then(errorMessage=>{
            expect(errorMessage).to.equal('Reason: This voucher is not valid!')
        })
    })



})


