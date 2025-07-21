// example useage: 
// VeterinariansUI.verify.servicesTeaser()
// VeterinariansUI.nav.services.petRadiology().should('exist')
// VeterinariansUI.nav.learnMore.forService('Pet Radiology').click()



class VeterinariansUI {
  visit() {
    cy.visit('/staff/veterinarians')
  }

  // ======= SMOKE CHECKS =======
  verify = {
    header: () => {
      cy.get('.brxe-container > .brxe-heading')
    },

    staffCards: () => {
      cy.get('.fr-staff-card__name').should('have.length.at.least', 1)
      cy.get('.fr-staff-card__title').should('exist')
      cy.get('.fr-staff-card__bio').should('exist')
    },

    photosPresent: () => {
      cy.get('.fr-staff-card__image img').each($img => {
        cy.wrap($img).should('have.attr', 'src').and('include', 'uploads')
      })
    },

    servicesTeaser: () => {
      const services = [
        'Pet Wellness Exam',
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

  // ======= INTERACTION =========
  nav = {
    clickByName: (name) => {
      cy.contains('.fr-staff-card__name', name).click()
    },
    scrollToBio: (name) => {
      cy.contains('.fr-staff-card__name', name).scrollIntoView()
    },

    services: {
      petWellness: () => cy.contains('.fr-feature-card__title', 'Pet Wellness Exam'),
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

export default new VeterinariansUI()