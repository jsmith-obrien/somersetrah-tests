// Example usage:
// UltrasoundUI.visit()
// UltrasoundUI.verify.hero()
// UltrasoundUI.verify.otherServices()
// UltrasoundUI.verify.footer()
// UltrasoundUI.nav.otherServices.petSurgery().click()

class UltrasoundUI {
  visit() {
    cy.visit('/services/pet-ultrasound')
  }

  // ======= SMOKE CHECKS =======
  verify = {
    hero: () => {
      cy.contains('h1', 'Pet Ultrasound').should('be.visible')
    },

    bodyText: () => {
      cy.contains('Ultrasound imaging is a non-invasive diagnostic tool').should('exist')
    },

    otherServices: () => {
      const services = [
        'Pet Dentistry',
        'Pet Radiology',
        'In-Hospital Pet Pharmacy',
        'Pet Oxygen Therapy',
        'Pet Ultrasound',
        'Pet General Surgery'
      ]
      services.forEach(service => {
        cy.contains('.fr-feature-card__title', service).should('exist')
      })
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

export default new UltrasoundUI()