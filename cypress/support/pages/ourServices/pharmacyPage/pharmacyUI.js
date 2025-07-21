// Example usage:
// PharmacyUI.visit()
// PharmacyUI.verify.hero()
// PharmacyUI.verify.bodyText()
// PharmacyUI.verify.footer()
// PharmacyUI.nav.scheduleAppointment().click()

class PharmacyUI {
  visit() {
    cy.visit('/services/in-hospital-pet-pharmacy')
  }

  // ======= SMOKE CHECKS =======
  verify = {
    header() {
      cy.get('.fr-intro > .brxe-heading')
        .should('have.text', 'In-Hospital Pet Pharmacy')
    },

  bodyText: () => {
    cy.contains('Our in-hospital pharmacy is stocked with a wide range of medications').should('exist')
  },

  testimonials: () => {
    cy.get('.fr-testimonial__quote').should('have.length.at.least', 1)
    cy.get('.swiper-button-next').should('exist')
  },

  contactCTA: () => {
    cy.contains('Ready to schedule?').should('be.visible')
    cy.contains('Contact Us').should('be.visible')
  },

  locationBlock: () => {
    cy.contains('Princess Anne, MD').should('be.visible')
    cy.contains('11279 Stewart Neck Rd').should('be.visible')
    cy.contains('(410) 651-1044').should('be.visible')
  },

  footer: () => {
    cy.get('footer').within(() => {
      cy.contains('Somerset Regional Animal Hospital').should('exist')
      cy.contains('Privacy Policy').should('exist')
      cy.contains('©').should('exist')
      cy.contains('11279 Stewart Neck Rd').should('exist')
      cy.contains('somersetrah@gmail.com').should('exist')
      cy.contains('(410) 651-1044').should('exist')
    })
  }
}

  // ======= INTERACTIONS =======
  nav = {
    scheduleAppointment: () => cy.contains('Contact Us')
  }
}

export default new PharmacyUI()