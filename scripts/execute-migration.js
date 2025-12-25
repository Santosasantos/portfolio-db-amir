/**
 * Script to display SQL migration files for manual execution
 * 
 * IMPORTANT: Supabase doesn't allow executing arbitrary SQL via the client library.
 * Please run these SQL files manually in the Supabase SQL Editor:
 * 
 * 1. Go to your Supabase Dashboard
 * 2. Navigate to SQL Editor
 * 3. Copy and paste the contents of each SQL file
 * 4. Execute them in order:
 *    - scripts/007_migrate_certifications_with_image.sql
 *    - scripts/008_create_certificate_images_bucket.sql
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

console.log('\n📋 CERTIFICATION MIGRATION SQL FILES');
console.log('\nPlease execute these SQL files in your Supabase SQL Editor:');
console.log('\n1. First, run: scripts/007_migrate_certifications_with_image.sql');
console.log('2. Then, run: scripts/008_create_certificate_images_bucket.sql\n');

// Display the SQL files
try {
  displaySQLFile(path.join(__dirname, '007_migrate_certifications_with_image.sql'));
  console.log('\n\n');
  displaySQLFile(path.join(__dirname, '008_create_certificate_images_bucket.sql'));
  
  console.log('\n\n✅ Instructions:');
  console.log('1. Copy each SQL block above');
  console.log('2. Go to Supabase Dashboard → SQL Editor');
  console.log('3. Paste and execute each SQL file in order');
  console.log('4. Verify the migration was successful\n');
} catch (error) {
  console.error('Error reading SQL files:', error.message);
  process.exit(1);
}

