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
     
    it('Check that login form appear', () => {         // check that all items in login form appear 
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

         
    it('Check that Create account button appear', () => {    // Check that create account button appear 
        cy.get('button[title="Create an account"]')
        .invoke('text')
        .then(bottonName=>{
            expect(bottonName).to.contain('Create an account')
        })
        
        })
})