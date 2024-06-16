const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    const filePath = path.resolve(__dirname, 'diseases.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return {
      statusCode: 200,
      body: jsonData,
    };
  } catch (error) {
    console.error("Error reading file:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load data' }),
    };
  }
};
