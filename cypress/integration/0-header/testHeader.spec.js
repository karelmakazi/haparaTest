describe('Hapara Header', () => {
  it('Loads in teacher mode', () => {
      cy.visit('http://localhost:3000')


      cy.get('.dd-menu-trigger')
        .should('be.visible')
        .within(()=> {
          cy.get('span')
            .should('contain.text', 'teacher@school.org')
        })

       cy.get('.header-bar_nav') 
        .should('be.visible')
        .within(()=> {
          cy.get('.navigation')
            .should('contain.text', 'Lessons')
            .should('not.contain.text', 'Assignments')
        })
  })

  it('Switches to student mode', ()=> {
    cy.get('.dd-menu-trigger').click()
    cy.get('.dd-menu-header').click()
    
    cy.get('.header-bar_nav') 
        .should('be.visible')
        .within(()=> {
          cy.get('.navigation')
            .should('contain.text', 'Assignments')
            .should('not.contain.text', 'Lessons')
        })
  })


})