const fs = require("fs")
const path = require("path")

// Read the SQL migration file
const migrationFile = path.join(__dirname, "011_add_conference_videos.sql")
const sql = fs.readFileSync(migrationFile, "utf8")

console.log("=".repeat(80))
console.log("Conference Videos Migration SQL")
console.log("=".repeat(80))
console.log("\n")
console.log(sql)
console.log("\n")
console.log("=".repeat(80))
console.log("Please execute this SQL in your Supabase SQL Editor")
console.log("=".repeat(80))

