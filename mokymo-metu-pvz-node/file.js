const fs = require("fs").promises;

async function readFileContent(fileName) {
  try {
    const data = await fs.readFile(fileName, "utf8");
    return data;
  } catch (err) {
    console.error("Error reading file:", err);
    throw err;
  }
}

async function processData() {
  try {
    const data = await readFileContent("example.txt");
    console.log("File content:", data);
  } catch (error) {
    console.error("Failed to process the file:", error);
  }
}

processData();
