// example usage:
// OurStaffUI.visit()
// OurStaffUI.verify.heroSection()
// OurStaffUI.verify.teamSections()
// OurStaffUI.nav.clickStaffByName('Dr. Rebecca Smith')
// OurStaffUI.nav.scheduleAppointment().click()

class OurStaffUI {
  visit() {
    cy.visit('/our-staff') // or cy.contains(...).click() if preferred
  }

  verify = {
    heroSection: () => {
      cy.contains('Meet Our Team').should('be.visible')
    },

    introText: () => {
      cy.contains('We’re proud to have a team of').should('exist')
    },

    teamSections: () => {
      // Sections like "Veterinarians", "Management", "Medical Staff"
      const sections = ['Veterinarians', 'Management', 'Medical Staff']
      sections.forEach(section => {
        cy.contains('h3', section).should('exist')
      })
    },

    staffCards: () => {
      // These are the staff profiles (image + name + title)
      cy.get('.fr-staff-card__name').should('have.length.at.least', 3)
      cy.get('.fr-staff-card__title').should('exist')
    },

    footerCTA: () => {
      cy.contains('Schedule An Appointment').should('exist')
    }
  }

  nav = {
    clickStaffByName: (name) => cy.contains('.fr-staff-card__name', name).click(),

    scheduleAppointment: () => cy.contains('Schedule An Appointment'),

    // Optional: click within team sections
    sectionAnchors: {
      veterinarians: () => cy.contains('h3', 'Veterinarians').scrollIntoView(),
      management: () => cy.contains('h3', 'Management').scrollIntoView(),
      medicalStaff: () => cy.contains('h3', 'Medical Staff').scrollIntoView()
    }
  }
}

export default new OurStaffUI()