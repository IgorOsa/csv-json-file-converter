// Simple tool for converting csv file to json file
const csvToJson = require('convert-csv-to-json')

// Read filenames from command line if not set default values
// node app.js <csv file> <json file>
const csvFilePath = process.argv[2] ? process.argv[2] : 'customer-data.csv'
const jsonFilePath = process.argv[3] ? process.argv[3] : 'customer-data.json'

try {
    csvToJson.fieldDelimiter(',').generateJsonFileFromCsv(csvFilePath, jsonFilePath)
} catch (error) {
    console.error(`${error.message}`)
}
