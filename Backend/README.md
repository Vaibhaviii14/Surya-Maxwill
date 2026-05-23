# WhatsApp-Based Negotiation & Admin Proxy System (Twilio Ticket Edition)

A lightweight Node.js/Express.js middleware communication system that bridges the gap between customers and a shop owner (admin) via WhatsApp. It automates customer-to-admin message routing, handles special triggers like `"negotiate"`, and routes formatted replies back from the admin directly to specific customers using the Twilio API and a dynamic Ticket ID Shortcode System.

---

## 📂 Project Structure

```text
c:\Users\Rahul sahu\my codes\maxwill-India2\Maxwill-India\backend/
├── .env                  # Configuration file (gitignored)
├── .env.example          # Template for environment variables
├── package.json          # Node.js manifest with project scripts and dependencies
├── README.md             # Project documentation (this file)
└── server/
    └── index.js          # Core Express server logic & WhatsApp routing
```

---

## ⚡ Tech Stack

- **Node.js** - Runtime environment
- **Express.js** - HTTP server framework
- **Twilio** - Official SDK to interact with the Twilio API
- **dotenv** - Configuration management
- **nodemon** - Hot-reload tool for local development

---

## 🚀 Installation & Setup

### 1. Clone & Navigate to Project
Make sure you are in the project folder:
```bash
cd "c:\Users\Rahul sahu\my codes\maxwill-India2\Maxwill-India\backend"
```

### 2. Install Dependencies
Install all package dependencies via npm:
```bash
npm install
```

### 3. Setup Configuration
Copy the `.env.example` file to create your `.env`:
```bash
cp .env.example .env
```
Open the `.env` file and replace the placeholders with your actual Twilio API credentials (found on your Twilio Console homepage):
- `TWILIOSID`: Your Twilio Account SID.
- `TWILIOTOK`: Your Twilio Auth Token.

**Note on Phone Numbers:** Ensure your `admPhn` and `twiNum` variables inside `server/index.js` are formatted as `whatsapp:+1234567890`.

---

## 🔗 Webhook Verification & Ngrok Testing

Since Twilio needs a publicly accessible HTTPS endpoint to send message events, you must expose your local port `3000` to the internet during development.

### Step 1: Start the local Express server
Run the development server which listens on Port `3000`:
```bash
npm run dev
```

### Step 2: Set up ngrok
In a separate terminal window, expose port `3000` using ngrok:
```bash
ngrok http 3000
```
Once run, ngrok will provide a forwarding address similar to:
`https://a1b2-34-56-78-90.ngrok-free.app`

Your Twilio Webhook URL will be:
`https://a1b2-34-56-78-90.ngrok-free.app/webhook`

---

## 🛠️ Twilio Dashboard Configuration

To subscribe to live WhatsApp message webhooks, follow these steps in your Twilio Console:

1. **Log in to Twilio**: Go to your Twilio Dashboard.
2. **Navigate to WhatsApp Sandbox / Senders**: Under Messaging -> Settings -> WhatsApp sandbox settings (or your approved WhatsApp sender).
3. **Set the Webhook URL**: Look for the field "WHEN A MESSAGE COMES IN".
4. **Paste your URL**: Enter your full ngrok webhook URL (e.g., `https://a1b2-34-56-78-90.ngrok-free.app/webhook`). Make sure the method is set to **HTTP POST**.
5. **Save**: Click Save. 

Make sure your test device joins the Twilio sandbox by sending the join code to the Twilio number if you are using the Sandbox.

---

## 🔁 Live Negotiation Testing Loop

Once the webhook is successfully set, you can test the system end-to-end:

### Scenario A: Customer Initial Message
1. Customer A (e.g., `whatsapp:+919876543210`) sends a message (e.g., `"Hello, is this item available?"`) to your Twilio WhatsApp number.
2. The proxy server receives the webhook event, automatically maps Customer A's number to **Ticket ID 101**, and forwards the message to the **Admin**'s phone number.
3. The Admin receives:
   `[Ticket 101]: Hello, is this item available?`

### Scenario B: Customer Triggers Negotiation
1. The customer sends the word `"negotiate"` (case-insensitive).
2. The customer receives an automated confirmation:
   `I have connected you to the owner. Please wait for their reply.`
3. The Admin receives an immediate notification:
   `[Ticket 101] wants to negotiate.`

### Scenario C: Admin Replies to Customer
1. The Admin reads the forwarded message and replies to the business number using the Ticket ID split format:
   `101 | Yes, it is available. I can do ₹450.`
2. The proxy server receives this webhook, identifies that it comes from the `admPhn`, extracts the target customer's phone number mapped to Ticket ID `101`, and sends the reply text.
3. Customer A receives:
   `Yes, it is available. I can do ₹450.`
