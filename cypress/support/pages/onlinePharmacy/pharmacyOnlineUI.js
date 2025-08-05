// Example usage:
// PharmacyOnlineUI.visit()
// PharmacyOnlineUI.verify.pagePaints()

// Please note: this is an external app, currently not scoped
// to test this.  Simple page model check exists to verify link 
// is functioning

class PharmacyOnlineUI {
  visit() {

    cy.visit('https://somersetregionalah.covetruspharmacy.com/')
  }

  verify = {
    pagePaints: () => {

      cy.contains('nav a', 'Online Pharmacy')
  .should('have.attr', 'href', 'https://somersetregionalah.covetruspharmacy.com/');
      
    }
  }
}

export default new PharmacyOnlineUI()