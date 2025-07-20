// NavBarUI.nav.click.ourStaff()       // goes to /our-staff
// NavBarUI.nav.click.ourServices()    // goes to /our-services
// NavBarUI.nav.ourStaff.veterinarians() // still works

nav = {
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
      NavBarUI.nav.ourStaff.hover()
      cy.contains('Veterinarians').click()
    },
    management: () => {
      NavBarUI.nav.ourStaff.hover()
      cy.contains('Management').click()
    },
    medicalStaff: () => {
      NavBarUI.nav.ourStaff.hover()
      cy.contains('Medical Staff').click()
    }
  },

  ourServices: {
    hover: () => cy.contains('Our Services').trigger('mouseover'),
    wellnessExam: () => {
      NavBarUI.nav.ourServices.hover()
      cy.contains('Pet Wellness Exam').click()
    },
    // etc...
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