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
     /*
    it('Should check for the item price in cart', () => {
        cy.fixture('price.json').then((productDetailPrice) => {
        cy.get('span[class="totalprice padding-left right font-red"]')
        .invoke('text')
        .then(cartPrice=>{
            expect(cartPrice).to.equal(productDetailPrice.price)
        })
        })
    })

    it('Should check for the item title in cart', () => {
        cy.fixture('productTitle.json').then((productDetailTitle) => {
        cy.get('span[class="product--title"]')
        .invoke('text')
        .then(cartTitle=>{
            expect(cartTitle).to.equal(productDetailTitle.title)
        })
        })
    })


    it('Should check that voucher code is not available', () => {
        cy.get('input[class="vouchercode"]').type("voucher1234")
        cy.get('button[class="a-button a-button--gray right"]').click()
        cy.get('p[class="error font-red"]')
        .invoke('text')
        .then(errorMessage=>{
            expect(errorMessage).to.equal('Reason: This voucher is not valid!')
        })
    })
*/


})


