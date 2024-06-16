const fs = require('fs');
const path = require('path');

exports.handler = async function() {
  const filePath = path.join(__dirname, 'school.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  return {
    statusCode: 200,
    body: jsonData,
  };
};
