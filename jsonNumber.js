const fs = require("fs");
const path = require("path");

// Construct the path to the JSON file located in the 'data' folder
const filePath = path.join(__dirname, "data", "input2.json");

// Read the JSON file
fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file:", err);
    return;
  }

  try {
    // Parse the JSON file into a JavaScript object
    const jsonObject = JSON.parse(data);

    // Count the number of top-level keys or objects
    const numberOfObjects = Object.keys(jsonObject).length;

    // Output the result
    console.log(`Number of objects: ${numberOfObjects}`);
  } catch (err) {
    console.error("Error parsing JSON:", err);
  }
});
