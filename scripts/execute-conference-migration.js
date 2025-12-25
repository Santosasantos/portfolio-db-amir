/**
 * Script to display SQL migration files for conference publications
 * Run with: node scripts/execute-conference-migration.js
 */

const fs = require('fs');
const path = require('path');

function displaySQLFile(filePath) {
  const sql = fs.readFileSync(filePath, 'utf8');
  console.log(`\n${'='.repeat(80)}`);
  console.log(`File: ${path.basename(filePath)}`);
  console.log('='.repeat(80));
  console.log(sql);
  console.log('='.repeat(80));
}

console.log('\n📋 CONFERENCE PUBLICATION MIGRATION SQL FILES');
console.log('\nPlease execute these SQL files in your Supabase SQL Editor:');
console.log('\n1. First, run: scripts/009_migrate_publications_for_conference.sql');
console.log('2. Then, run: scripts/010_create_conference_storage_buckets.sql\n');

// Display the SQL files
try {
  displaySQLFile(path.join(__dirname, '009_migrate_publications_for_conference.sql'));
  console.log('\n\n');
  displaySQLFile(path.join(__dirname, '010_create_conference_storage_buckets.sql'));
  
  console.log('\n\n✅ Instructions:');
  console.log('1. Copy each SQL block above');
  console.log('2. Go to Supabase Dashboard → SQL Editor');
  console.log('3. Paste and execute each SQL file in order');
  console.log('4. Verify the migration was successful\n');
} catch (error) {
  console.error('Error reading SQL files:', error.message);
  process.exit(1);
}

