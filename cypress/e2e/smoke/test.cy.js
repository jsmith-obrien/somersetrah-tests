describe('New Client Intake – Starfleet Signature Test', () => {
  it('draws a Starfleet delta on the signature canvas and chills', () => {
    cy.visit('https://somersetrah.com/new-client-intake/')

    cy.get('canvas')
      .should('be.visible')
      .then($canvas => {
        const canvas = $canvas[0]
        const ctx = canvas.getContext('2d')

        ctx.lineWidth = 3
        ctx.strokeStyle = 'black'

        const centerX = 130
        const offsetY = 5  // <-- raised up


        ctx.beginPath()
        ctx.moveTo(centerX, 20 + offsetY)
        ctx.lineTo(centerX - 20, 80 + offsetY)
        ctx.lineTo(centerX, 60 + offsetY)
        ctx.lineTo(centerX + 20, 80 + offsetY)
        ctx.closePath()
        ctx.stroke()

        // Inner swoosh
        ctx.beginPath()
        ctx.moveTo(centerX - 5, 45 + offsetY)
        ctx.quadraticCurveTo(centerX, 35 + offsetY, centerX + 5, 55 + offsetY)
        ctx.stroke()
      })
  })
})