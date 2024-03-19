describe('template spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('confirms a checkout', () => {
    cy.get('#email').type('john.doe@example.com');
    cy.get('#credit-card-number').type('1111111111111111');
    cy.get('#expiration-date').type('10/20');
    cy.get('#cvv').type('123');
    cy.get('#confirm-button').click();
  });
})
