const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    console.log("Starting function for diseases.json");
    const filePath = path.resolve(__dirname, 'diseases.json');
    console.log("File path resolved:", filePath);
    if (fs.existsSync(filePath)) {
      console.log("File exists");
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      console.log("File read successfully");
      return {
        statusCode: 200,
        body: jsonData,
      };
    } else {
      console.error("File does not exist:", filePath);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'File does not exist' }),
      };
    }
  } catch (error) {
    console.error("Error reading file:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load data' }),
    };
  }
};
