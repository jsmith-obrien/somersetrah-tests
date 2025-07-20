// example usage: 
// HomeUI.visit()
// HomeUI.verify.topBar()
// HomeUI.verify.heroSection()
// HomeUI.verify.ctaButtonsBelowHero()
// HomeUI.nav.cta.emailUs().click()
// HomeUI.nav.services.petSurgery().click()
// HomeUI.nav.bottomCtas.contactUs().click()
// HomeUI.nav.footer.privacyPolicy().should('have.attr', 'href')

class HomeUI {
  visit() {
    cy.visit('/')
  }

  // ========== Smoke-level Presence Checks ==========
  verify = {
    topBar: () => {
      cy.contains('Hours of Operation Now Monday to Friday 8am-5pm').should('be.visible')
      cy.contains('(410) 651-1044').should('be.visible')
      cy.contains('11279 Stewart Neck Rd').should('be.visible')
    },

    heroSection: () => {
      cy.contains('Somerset animal hospital').should('be.visible')
      cy.contains('Your Family Members Are Important To Us').should('be.visible')
    },

    ctaButtonsBelowHero: () => {
      cy.contains('button span', 'Schedule An Appointment').should('exist')
      cy.contains('button span', 'Email Us').should('exist')
      cy.contains('a', 'Call Us').should('have.attr', 'href').and('include', 'tel:')
    },

    servicesTeaser: () => {
      [
        'Pet Dentistry',
        'Pet Radiology',
        'In-Hospital Pet Pharmacy',
        'Pet Oxygen Therapy',
        'Pet Ultrasound',
        'Pet General Surgery'
      ].forEach(service => {
        cy.contains('.fr-feature-card__title', service).should('exist')
      })
    },

    patientsAndContactBlock: () => {
      cy.contains('New Patient Form').should('exist')
      cy.contains('Contact Us').should('exist')
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

  // ========== Actionable Navigation ==========
  nav = {
    // Top buttons under hero
    cta: {
      scheduleAppointment: () => cy.contains('button span', 'Schedule An Appointment'),
      emailUs: () => cy.contains('button span', 'Email Us'),
      callUs: () => cy.contains('a', 'Call Us')
    },

    // Service cards in the middle of the page
    services: {
      petDentistry: () => cy.contains('.fr-feature-card__title', 'Pet Dentistry'),
      petRadiology: () => cy.contains('.fr-feature-card__title', 'Pet Radiology'),
      petPharmacy: () => cy.contains('.fr-feature-card__title', 'In-Hospital Pet Pharmacy'),
      petOxygen: () => cy.contains('.fr-feature-card__title', 'Pet Oxygen Therapy'),
      petUltrasound: () => cy.contains('.fr-feature-card__title', 'Pet Ultrasound'),
      petSurgery: () => cy.contains('.fr-feature-card__title', 'Pet General Surgery')
    },

    // Lower CTA section
    bottomCtas: {
      newPatientForm: () => cy.contains('a.fr-button', 'New Patient Form'),
      contactUs: () => cy.contains('a.fr-button', 'Contact Us')
    },

    // Footer links
    footer: {
      privacyPolicy: () => cy.contains('footer a', 'Privacy Policy'),
      phone: () => cy.contains('footer', '(410) 651-1044'),
      email: () => cy.contains('footer', 'somersetrah@gmail.com'),
      address: () => cy.contains('footer', '11279 Stewart Neck Rd')
    }
  }
}

export default new HomeUI()