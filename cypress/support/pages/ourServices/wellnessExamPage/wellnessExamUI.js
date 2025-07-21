// Example usage:
// WellnessExamUI.visit()
// WellnessExamUI.verify.hero()
// WellnessExamUI.verify.bodyText()
// WellnessExamUI.verify.testimonials()
// WellnessExamUI.verify.footer()
// WellnessExamUI.nav.scheduleAppointment().click()

class WellnessExamUI {
  visit() {
    cy.visit('/services/pet-wellness-exam')
  }

  // ======= SMOKE CHECKS =======
    verify = {
    header() {
      cy.get('.fr-intro > .brxe-heading')
        .should('have.text', 'Pet Wellness Exam')
    },

verifyBodyText() {
  cy.contains('Our team at Somerset Regional Animal Hospital believes').should('exist')
},

verifyTestimonials() {
  cy.get('.fr-testimonial__quote').should('have.length.at.least', 1)
  cy.get('.swiper-button-next').should('exist')
},

verifyContactCTA() {
  cy.contains('Ready to schedule?').should('be.visible')
  cy.contains('Contact Us').should('be.visible')
},

verifyLocationBlock() {
  cy.contains('Princess Anne, MD').should('be.visible')
  cy.contains('11279 Stewart Neck Rd').should('be.visible')
  cy.contains('(410) 651-1044').should('be.visible')
},

verifyFooter() {
  cy.get('footer').within(() => {
    cy.contains('Somerset Regional Animal Hospital').should('exist')
    cy.contains('Privacy Policy').should('exist')
    cy.contains('©').should('exist')
    cy.contains('11279 Stewart Neck Rd').should('exist')
    cy.contains('somersetrah@gmail.com').should('exist')
    cy.contains('(410) 651-1044').should('exist')
  })
}}

  // ======= INTERACTIONS =======
  nav = {
    scheduleAppointment: () => cy.contains('Contact Us')
  }
}

export default new WellnessExamUI()