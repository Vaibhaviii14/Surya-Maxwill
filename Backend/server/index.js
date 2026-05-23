const express = require('express')
const twilio = require('twilio')
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') })

const app = express()
app.use(express.urlencoded({ extended: false }))

const sid = process.env.TWILIOSID
const tok = process.env.TWILIOTOK
const cli = twilio(sid, tok)

const twiNum = process.env.TWILIONUM
const admPhn = process.env.ADMINPHONE
const port = process.env.PORT || 3000

const ticketToPhone = new Map()
const phoneToTicket = new Map()
let nextTicketId = 101

const sendMsg = async (to, txt) => {
  await cli.messages.create({ body: txt, from: twiNum, to: to })
}

app.post('/webhook', async (req, res) => {
  const msg = req.body
  const num = msg.From
  const txt = msg.Body.trim()

  if (num === admPhn) {
    const pts = txt.split('|')
    if (pts.length === 2) {
      const targetTicket = parseInt(pts[0].trim())
      const adminReply = pts[1].trim()
      
      const targetPhone = ticketToPhone.get(targetTicket)
      
      if (targetPhone) {
        await sendMsg(targetPhone, adminReply)
      } else {
        await sendMsg(admPhn, `Error: Ticket ${targetTicket} not found.`)
      }
    } else {
      await sendMsg(admPhn, 'System: Invalid format. Please use "TicketID | Message"')
    }
  } else {
    if (!phoneToTicket.has(num)) {
      phoneToTicket.set(num, nextTicketId)
      ticketToPhone.set(nextTicketId, num)
      nextTicketId++ 
    }
    
    const userTicket = phoneToTicket.get(num)

    if (txt.toLowerCase() === 'negotiate') {
      await sendMsg(admPhn, `[Ticket ${userTicket}] wants to negotiate.`)
      await sendMsg(num, 'I have connected you to the owner. Please wait for their reply.')
    } else {
      await sendMsg(admPhn, `[Ticket ${userTicket}]: ${txt}`)
    }
  }
  
  res.send('<Response></Response>')
})

app.listen(port)
