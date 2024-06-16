const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    const filePath = path.join(__dirname, 'eurosis.json');
    const jsonData = fs.readFileSync(filePath, 'utf-8');
    return {
      statusCode: 200,
      body: jsonData,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load data' }),
    };
  }
};
