// nav.click.ourStaff()       // goes to /our-staff
// nav.click.ourServices()    // goes to /our-services
// nav.ourStaff.veterinarians() // still works

const nav = {
  topLevel: {
    home: () => cy.contains('nav a', 'Home'),
    ourStaff: () => cy.contains('nav a', 'Our Staff'),
    ourServices: () => cy.contains('nav a', 'Our Services'),
    pharmacy: () => cy.contains('nav a', 'Online Pharmacy'),
    testimonials: () => cy.contains('nav a', 'Testimonials'),
    newClient: () => cy.contains('nav a', 'New Client'),
    contactUs: () => cy.contains('nav a', 'Contact Us')
  },

  click: {
    ourStaff: () => cy.contains('nav a', 'Our Staff').click(),
    ourServices: () => cy.contains('nav a', 'Our Services').click()
  },

  ourStaff: {
    hover: () => cy.contains('Our Staff').trigger('mouseover'),
    veterinarians: () => {
      cy.contains('a', 'Veterinarians').click({ force: true })
    },
    management: () => {
      cy.contains('Management').click({ force: true })
    },
    medicalStaff: () => {
      cy.contains('Medical Staff').click({ force: true })
    }
  },

  ourServices: {
    hover: () => cy.contains('Our Services').trigger('mouseover'),
    wellnessExam: () => {
      cy.contains('Pet Wellness Exam').click({ force: true })
    },
    dentistry: () => {
      cy.contains('Pet Dentistry').click({ force: true })
    },
    radiology: () => {
      cy.contains('Pet Radiology').click({ force: true })
    },
    pharmacy: () => {
      cy.contains('In-Hospital Pet Pharmacy').click({ force: true })
    },
    oxygenTherapy: () => {
      cy.contains('Pet Oxygen Therapy').click({ force: true })
    },
    ultrasound: () => {
      cy.contains('Pet Ultrasound').click({ force: true })
    },
    generalSurgery: () => {
      cy.contains('Pet General Surgery').click({ force: true })
    }
  }
}

const verify = {
  globalLinks: () => {
    const links = [
      'Home',
      'Our Staff',
      'Our Services',
      'Online Pharmacy',
      'Testimonials',
      'New Client',
      'Contact Us'
    ]
    links.forEach(link => {
      cy.contains('nav a', link).should('exist')
    })
  },
  ourStaffDropdown: () => {
    nav.ourStaff.hover()
      ;['Veterinarians', 'Management', 'Medical Staff'].forEach(link => {
        cy.contains(link).should('be.visible')
      })
  }
}

const navUI = {
  nav,
  verify
}

export default navUI