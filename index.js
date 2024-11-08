require('dotenv').config();  // Load environment variables from .env file

const axios = require('axios');
const https = require('https');
const fs = require('fs');

// Read configuration from environment variables
const ravenDbUrl = "https://a.free.csdl.ravendb.cloud";
const database = "MMIC-IV";
const certPath = "PEM/free.csdl.client.certificate.pem";
const keyPath = "PEM/free.csdl.client.certificate.key";
const caCertPath = "PEM/free.csdl.client.certificate.crt";

// Load the certificate, key, and CA certificate files
const cert = fs.readFileSync(certPath);
const key = fs.readFileSync(keyPath);
const ca = fs.readFileSync(caCertPath);

// Create an HTTPS agent to use the certificates
const agent = new https.Agent({
  cert: cert,
  key: key,
  ca: ca,  // If your server requires a CA certificate for verification
  rejectUnauthorized: false,  // Reject unauthorized connections
});

// Function to create headers (if needed for custom headers)
const getHeaders = () => {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  };
};

// Function to create a new document
const createDocument = async () => {
  const url = `${ravenDbUrl}/databases/${database}/docs`;

  const document = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com',
  };

  try {
    const response = await axios.post(url, document, {
      ...getHeaders(),
      httpsAgent: agent,  // Pass the agent with the certificates
    });
    console.log('Document created:', response.data);
  } catch (error) {
    console.error('Error creating document:', error.response ? error.response.data : error.message);
  }
};

// Function to get a document by ID
const getDocumentByQuery = async (query) => {
  const url = `${ravenDbUrl}/databases/${database}/docs?${query}`;

  try {
    const response = await axios.get(url, {
      ...getHeaders(),
      httpsAgent: agent,  // Pass the agent with the certificates
    });
    console.log('Document retrieved:', response.data);
  } catch (error) {
    console.error('Error retrieving document:', error.response ? error.response.data : error.message);
  }
};

// Example usage
// createDocument();  // Creates a document
getDocumentByQuery('start=9&pageSize=2');  // Uncomment to query by document ID
