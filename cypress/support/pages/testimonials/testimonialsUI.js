// Example usage:
// TestimonialsUI.visit()
// TestimonialsUI.verify.hero()
// TestimonialsUI.verify.quotes()
// TestimonialsUI.verify.positiveSentiment()
// TestimonialsUI.nav.otherServices.petSurgery().click()

import Sentiment from 'sentiment'

class TestimonialsUI {
  visit() {
    cy.visit('/testimonials')
  }

  // ======= SMOKE CHECKS =======
  verify = {
    header() {
      cy.get('.brxe-container > .brxe-heading')
        .should('have.text', 'Our Testimonials')
    },

quotes() {
  cy.get('.fr-testimonial__quote').should('have.length.at.least', 1)
},

positiveSentiment() {
  cy.get('.fr-testimonial__quote').each($el => {
    const text = $el.text()
    const sentiment = new Sentiment()
    const result = sentiment.analyze(text)
    expect(result.score, `Quote sentiment too negative:\n"${text}"`)
      .to.be.greaterThan(-1)
  })
},

contactCTA() {
  cy.contains('Ready to schedule?').should('be.visible')
  cy.contains('Contact Us').should('be.visible')
},

locationBlock() {
  cy.contains('Princess Anne, MD').should('be.visible')
  cy.contains('11279 Stewart Neck Rd').should('be.visible')
  cy.contains('(410) 651-1044').should('be.visible')
},

footer() {
  cy.get('footer').within(() => {
    cy.contains('Somerset Regional Animal Hospital').should('exist')
    cy.contains('Privacy Policy').should('exist')
    cy.contains('©').should('exist')
    cy.contains('11279 Stewart Neck Rd').should('exist')
    cy.contains('somersetrah@gmail.com').should('exist')
    cy.contains('(410) 651-1044').should('exist')
  })
}}

  // ======= NAV SECTIONS =======
  nav = {
    scheduleAppointment: () => cy.contains('Contact Us'),

    otherServices: {
      petDentistry: () => cy.contains('.fr-feature-card__title', 'Pet Dentistry'),
      petRadiology: () => cy.contains('.fr-feature-card__title', 'Pet Radiology'),
      petPharmacy: () => cy.contains('.fr-feature-card__title', 'In-Hospital Pet Pharmacy'),
      petOxygen: () => cy.contains('.fr-feature-card__title', 'Pet Oxygen Therapy'),
      petUltrasound: () => cy.contains('.fr-feature-card__title', 'Pet Ultrasound'),
      petSurgery: () => cy.contains('.fr-feature-card__title', 'Pet General Surgery')
    },

    learnMore: {
      forService: (title) => {
        return cy.contains('.fr-feature-card__title', title)
          .parent()
          .find('.fr-feature-card__cta')
      }
    }
  }
}

export default new TestimonialsUI()