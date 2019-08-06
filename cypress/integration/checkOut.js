describe('cartSpec', () => {
    beforeEach(() => {
        cy.pressSearchButton()
        cy.enterSearchValue()
        cy.pressEnter()
        cy.wait(5000);
        cy.selectFirstItem()
        cy.wait(2000);
        cy.selectSize()
        cy.selectColor()
        cy.addToCart()
        cy.goToCart()
        cy.goToCheckout()
      });
     
    it('Should check that login form appear', () => {
        cy.get('button[data-codecept="customerLoginButton"]')
        .invoke('text')
        .then(bottonName=>{
            expect(bottonName).to.contain('Login')
        })
        cy.get('.mail')
        .invoke('text')
        .then(emailText=>{
            expect(emailText).to.contain('Your email')

        })

        cy.get('.password')
        .invoke('text')
        .then(passText=>{
            expect(passText).to.contain('Your password')

        })
    })

         
    it('Should check that Create account button appear', () => {
        cy.get('button[title="Create an account"]')
        .invoke('text')
        .then(bottonName=>{
            expect(bottonName).to.contain('Create an account')
        })
        
        })
})