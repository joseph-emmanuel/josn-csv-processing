const fs = require("fs");
const path = require("path");
const csv = require("csv-parser");

// Construct the path to the CSV file located in the 'data' folder
const filePath = path.join(__dirname, "out", "output2.csv");

// Initialize a counter for the rows
let rowCount = 0;

// Read the CSV file and count the rows
fs.createReadStream(filePath)
  .pipe(csv())
  .on("data", () => {
    rowCount++; // Increment the counter for each row
  })
  .on("end", () => {
    console.log(`Number of rows: ${rowCount}`);
  })
  .on("error", (err) => {
    console.error("Error reading the CSV file:", err);
  });
