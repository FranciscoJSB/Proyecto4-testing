// Modules import
const fs = require('fs');
const path = require('path');

// Asynchronous function exported
exports.handler = async function(event, context) {
  try {
    // File path
    const filePath = path.join(__dirname, 'school.json');
    // Read file
    const jsonData = fs.readFileSync(filePath, 'utf-8');

    // Returns the file content
    return {
      statusCode: 200,
      body: jsonData,
    };
  } catch (error) {
    // Returns error message
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load data' }),
    };
  }
}; // End of the function
