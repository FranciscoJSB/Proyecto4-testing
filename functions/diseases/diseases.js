// Modules import
const fs = require('fs');
const path = require('path');

// Asynchronous function exported
exports.handler = async function(event, context) {
  try {
    // Messages to locate json file
    console.log("Starting function for diseases.json");
    const filePath = path.resolve(__dirname, 'diseases.json');
    console.log("File path resolved:", filePath);
    
    // Check if the file exists
    if (fs.existsSync(filePath)) {
      // Read the file
      console.log("File exists"); 
      const jsonData = fs.readFileSync(filePath, 'utf-8');
      console.log("File read successfully");

      // Returns the file content
      return {
        statusCode: 200,
        body: jsonData,
      };
    // If the file does not exist
    } else {
      // No file message
      console.error("File does not exist:", filePath);
      // Returns error message
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'File does not exist' }),
      };
    }
  } catch (error) {
    // Error message while reading file
    console.error("Error reading file:", error);

    // Returns error message
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to load data' }),
    };
  }
}; // End of the function
