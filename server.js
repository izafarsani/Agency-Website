
const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Serve static files from the current directory
// In a standard project, React builds usually go to a /dist or /public folder
// But here we serve the root to accommodate the existing structure
app.use(express.static(path.join(__dirname)));

/**
 * Lead Generation API
 * Handles the "Book a Strategy Call" form submissions
 */
app.post('/api/contact', async (req, res) => {
  const { name, email, message, businessStage } = req.body;

  console.log(`[Lead Received] Name: ${name}, Email: ${email}, Stage: ${businessStage}`);

  // Here you would typically integrate with:
  // 1. Email service (SendGrid/Mailgun)
  // 2. CRM (HubSpot/Salesforce)
  // 3. Slack/Discord notification
  
  // Simulate database/API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  res.status(200).json({ 
    success: true, 
    message: "Strategy call request received successfully.",
    timestamp: new Date().toISOString()
  });
});

/**
 * SPA Routing Support
 * Ensures React Router works correctly on page refreshes
 */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Pixion Studio Server running at http://localhost:${PORT}`);
});
