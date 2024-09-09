const { Parser } = require("json2csv");
const fs = require("fs");
const path = require("path");

// Read the JSON file from the "data" folder
const filePath = path.join(__dirname, "data", "input2.json");
const jsonData = JSON.parse(fs.readFileSync(filePath, "utf8"));

try {
  // Create a new parser instance
  const json2csvParser = new Parser();
  const csv = json2csvParser.parse(jsonData);

  // Write the CSV data to a file
  fs.writeFileSync("out/output2.csv", csv);

  console.log("CSV file has been created successfully.");
} catch (err) {
  console.error("Error converting JSON to CSV:", err);
}
