/**
 * @typedef {Object} NewClientFormData
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [email]
 * @property {string} [phone]
 * @property {string} [address]
 * @property {string} [city]
 * @property {string} [state]
 * @property {string} [zip]
 * @property {string} [petName]
 * @property {string} [species]
 * @property {string} [breed]
 * @property {string} [age]
 * @property {string} [sex]
 * @property {boolean} [spayedNeutered]
 * @property {string} [concerns]
 * @property {string} [medications]
 * @property {string} [date]
 * @property {string} [time]
 */

class NewClientUI {
  url = '/new-client-intake'

  sel = {
    // Header/Footer
    header: '.fr-header-bravo',
    footer: '.fr-footer-juliet',

    // Form fields
    firstName: 'input[name="firstName"]',
    lastName: 'input[name="lastName"]',
    email: 'input[name="email"]',
    phone: 'input[name="phone"]',
    address: 'input[name="address"]',
    city: 'input[name="city"]',
    state: 'input[name="state"]',
    zip: 'input[name="zip"]',
    petName: 'input[name="petName"]',
    species: 'input[name="species"]',
    breed: 'input[name="breed"]',
    age: 'input[name="age"]',
    sex: 'select[name="sex"]',
    spayedNeutered: 'input[name="spayedNeutered"]',
    concerns: 'textarea[name="concerns"]',
    medications: 'textarea[name="medications"]',
    date: 'input[name="date"]',
    time: 'input[name="time"]',
    signatureCanvas: 'canvas',

    // Actions
    submitBtn: 'button[type="submit"], button:contains("Submit")',

    // Content checks
    pageH1: 'h1:contains("New Client Intake")',
    footerPhone: '.fr-footer-juliet a[href^="tel:"]',
    footerEmail: '.fr-footer-juliet a[href^="mailto:"]',
    footerAddr: '.fr-footer-juliet address',
  }

  visit() {
    cy.visit(this.url)
  }

  verify = {
    header: () => {
      const s = this.sel
      cy.get(s.header).should('be.visible')
      cy.get(s.header).within(() => {
        cy.get('img[alt*="Somerset"]').should('exist')
        cy.contains('a', 'Contact Us').should('exist')
      })
    },

    footer: () => {
      const s = this.sel
      cy.get(s.footer).should('be.visible')
      cy.get(s.footerAddr).should('exist')
      cy.get(s.footerPhone).should('have.attr', 'href').and('match', /^tel:/)
      cy.get(s.footerEmail).should('have.attr', 'href').and('match', /^mailto:/)
    },

    otherFields: () => {
      const s = this.sel
      cy.get(s.pageH1).should('exist')
      ;[
        s.firstName, s.lastName, s.email, s.phone,
        s.address, s.city, s.state, s.zip,
        s.petName, s.species, s.breed, s.age,
        s.sex, s.concerns, s.medications, s.date, s.time
      ].forEach(sel => cy.get(sel).should('exist'))
      cy.get(s.signatureCanvas).should('exist')
      cy.get(s.submitBtn).should('exist')
    },

    successBanner: (text = 'Thank you') => {
      cy.contains(text, { matchCase: false }).should('be.visible')
    }
  }

  /**
   * @param {NewClientFormData} data
   */
  fill(data = {}) {
    const s = this.sel
    const typeIf = (sel, val) => { if (val !== undefined) cy.get(sel).clear().type(String(val)) }
    const checkIf = (sel, val) => { if (val) cy.get(sel).check({ force: true }) }
    const selectIf = (sel, val) => { if (val !== undefined) cy.get(sel).select(String(val), { force: true }) }

    typeIf(s.firstName, data.firstName)
    typeIf(s.lastName, data.lastName)
    typeIf(s.email, data.email)
    typeIf(s.phone, data.phone)
    typeIf(s.address, data.address)
    typeIf(s.city, data.city)
    typeIf(s.state, data.state)
    typeIf(s.zip, data.zip)
    typeIf(s.petName, data.petName)
    typeIf(s.species, data.species)
    typeIf(s.breed, data.breed)
    typeIf(s.age, data.age)
    selectIf(s.sex, data.sex)
    checkIf(s.spayedNeutered, data.spayedNeutered)
    typeIf(s.concerns, data.concerns)
    typeIf(s.medications, data.medications)

    // Signature
    cy.get(s.signatureCanvas).then(($c) => {
      const r = $c[0].getBoundingClientRect()
      const x = r.x + r.width * 0.2
      const y = r.y + r.height * 0.6
      cy.wrap($c)
        .trigger('mousedown', { clientX: x, clientY: y })
        .trigger('mousemove', { clientX: x + 80, clientY: y + 10 })
        .trigger('mouseup', { force: true })
    })

    typeIf(s.date, data.date)
    typeIf(s.time, data.time)
  }

  submit() {
    cy.get(this.sel.submitBtn).click()
  }
}

export default new NewClientUI()