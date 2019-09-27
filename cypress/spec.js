describe('My First Test', function() {
  it('Does not do much!', function() {
  	const NAME = 'BLAHBLAH'
  	cy.visit('http://127.0.0.1:4200')
  	cy.get('#name').type(NAME)
  	cy.get('#address').type('1234 Street')
  	cy.get('button[type="submit"]').click()
  	cy.get('#answer').should($id => {
  		expect($id.text()).to.contains(NAME)
  	})
  })
})