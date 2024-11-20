const messageService = require('../services/messageService');
const axios = require('axios');


async function storeMessage(req, res, next) {
  console.log("Request body:", req.body);
  try {
    const message = req.body;
    
    const storedMessage = await messageService.storeMessage(message);

    await autoUpdateForNewLead(message);

    res.json({ message: 'Message stored successfully', storedMessage });
  } catch (error) {
    console.error('Error storing message:', error);
    res.status(500).json({ error: 'Failed to store message' });
  }
}


async function storeMessage(req, res, next) {
  console.log("Request body:", req.body);
  try {
    const message = req.body;
    
    const storedMessage = await messageService.storeMessage(message);

    // await autoUpdateForNewLead(message);

    res.json({ message: 'Message stored successfully', storedMessage });
  } catch (error) {
    console.error('Error storing message:', error);
    res.status(500).json({ error: 'Failed to store message' });
  }
}



async function getData(req, res) {
  try {
    const leads = await messageService.getLeads();
    res.status(200).json(leads);
  } catch (error) {
    res.status(404).json({ error: "failed" });
  }
}

module.exports = {
  storeMessage,
  getData
};

