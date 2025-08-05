// Clean + accurate imports based on your current folder structure

import homeUI from '../../support/pages/home/homeUI'
import navUI from '../../support/pages/layout/navbarUI'

import ourStaffUI from '../../support/pages/ourStaff/ourStaffPage/outStaffUI'
import veterinariansUI from '../../support/pages/ourStaff/veterinariansPage/veterinariansUI'
import managementUI from '../../support/pages/ourStaff/managementPage/managementUI'
import medicalStaffUI from '../../support/pages/ourStaff/medicalStaffPage/medicalStaffUI'

import dentistryUI from '../../support/pages/ourServices/dentistryPage/dentistryUI'
import wellnessExamUI from '../../support/pages/ourServices/wellnessExamPage/wellnessExamUI'
import radiologyUI from '../../support/pages/ourServices/radiologyPage/radiologyUI'
import pharmacyUI from '../../support/pages/ourServices/pharmacyPage/pharmacyUI'
import oxygenTherapyUI from '../../support/pages/ourServices/oxygenTherapyPage/oxygenTherapyUI'
import ultrasoundUI from '../../support/pages/ourServices/ultrasoundPage/ultrasoundUI'
import surgeryUI from '../../support/pages/ourServices/generalSurgeryPage/generalSurgeryUI'
import ourServicesUI from '../../support/pages/ourServices/ourServicesPage/ourServicesUI'

import testimonialsUI from '../../support/pages/testimonials/testimonialsUI'
import newClientUI from '../../support/pages/newClient/newClientIntakeUI'
import contactUI from '../../support/pages/contactUs/contactUI'
import onlinePharmacyUI from '../../support/pages/onlinePharmacy/pharmacyOnlineUI'

describe('Top Navigation – Smoke Tests (One Per Page)', () => {
  beforeEach(() => {
    homeUI.visit()
  })

  it('navigates to Our Staff', () => {
    navUI.nav.click.ourStaff()
    ourStaffUI.verify.heroSection()
  })

  it('navigates to Veterinarians', () => {
    navUI.nav.ourStaff.veterinarians()
    veterinariansUI.verify.header()
  })

  it('navigates to Management', () => {
    navUI.nav.ourStaff.management()
    managementUI.verify.header()
  })

  it('navigates to Medical Staff', () => {
    navUI.nav.ourStaff.medicalStaff()
    medicalStaffUI.verify.header()
  })

  it('navigates to Our Services', () => {
    navUI.nav.click.ourServices()
    ourServicesUI.verify.scheduleButton()
  })

  it('navigates to Pet Dentistry', () => {
    navUI.nav.ourServices.dentistry()
    dentistryUI.verify.header()
  })

  it('navigates to Pet Radiology', () => {
    navUI.nav.ourServices.radiology()
    radiologyUI.verify.header()
  })

  it('navigates to Pet Pharmacy', () => {
    navUI.nav.ourServices.pharmacy()
    pharmacyUI.verify.header()
  })

  it('navigates to Oxygen Therapy', () => {
    navUI.nav.ourServices.oxygenTherapy()
    oxygenTherapyUI.verify.header()
  })

  it('navigates to Ultrasound', () => {
    navUI.nav.ourServices.ultrasound()
    ultrasoundUI.verify.header()
  })

  it('navigates to Surgery', () => {
    navUI.nav.ourServices.generalSurgery()
    surgeryUI.verify.header()
  })

  it('verify link to Online Pharmacy', () => {
    navUI.nav.topLevel.pharmacy().should('have.attr', 'href', 'https://somersetregionalah.covetruspharmacy.com/')
  })

  it('navigates to Testimonials', () => {
    navUI.nav.topLevel.testimonials().click()
    testimonialsUI.verify.header()
  })

  it('navigates to New Client', () => {
    navUI.nav.topLevel.newClient().click()
    newClientUI.verify.header()
  })

  it('navigates to Contact Us', () => {
    navUI.nav.topLevel.contactUs().click()
    contactUI.verify.header()
  })
})