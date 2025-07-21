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
      // Confirm logo or header unique to Somerset is visible
      cy.contains('Somerset Regional Animal Hospital', { matchCase: false }).should('exist')

      cy.get('body').should('be.visible')
    }
  }
}

export default new PharmacyOnlineUI()