/**
 * TypeScript script to execute SQL migration files in Supabase
 * Run with: npx tsx scripts/run-migration.ts
 * Or: ts-node scripts/run-migration.ts
 */

import { createClient } from '@supabase/supabase-js'
import * as fs from 'fs'
import * as path from 'path'
import * as dotenv from 'dotenv'

// Load environment variables
dotenv.config({ path: '.env.local' })

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

if (!supabaseUrl || !supabaseServiceKey) {
  console.error('❌ Error: Missing required environment variables')
  console.error('Required: NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseServiceKey, {
  auth: {
    autoRefreshToken: false,
    persistSession: false,
  },
})

async function executeSQL(sql: string): Promise<boolean> {
  try {
    // Try using the REST API directly
    const response = await fetch(`${supabaseUrl}/rest/v1/rpc/exec_sql`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseServiceKey,
        'Authorization': `Bearer ${supabaseServiceKey}`,
      },
      body: JSON.stringify({ sql_query: sql }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.warn(`⚠️  Could not execute via RPC: ${errorText}`)
      return false
    }

    return true
  } catch (error: any) {
    console.warn(`⚠️  Error: ${error.message}`)
    return false
  }
}

async function main() {
  console.log('🚀 Starting certification migration...\n')

  const migrationFile = path.join(__dirname, '007_migrate_certifications_with_image.sql')
  const bucketFile = path.join(__dirname, '008_create_certificate_images_bucket.sql')

  // Read SQL files
  const migrationSQL = fs.readFileSync(migrationFile, 'utf8')
  const bucketSQL = fs.readFileSync(bucketFile, 'utf8')

  console.log('📝 Note: Supabase requires SQL to be executed via the SQL Editor.')
  console.log('   This script will display the SQL for you to copy.\n')

  console.log('='.repeat(80))
  console.log('STEP 1: Execute this SQL in Supabase SQL Editor')
  console.log('='.repeat(80))
  console.log(migrationSQL)
  console.log('\n')

  console.log('='.repeat(80))
  console.log('STEP 2: Execute this SQL in Supabase SQL Editor')
  console.log('='.repeat(80))
  console.log(bucketSQL)
  console.log('\n')

  console.log('✅ Instructions:')
  console.log('1. Go to your Supabase Dashboard: https://supabase.com/dashboard')
  console.log('2. Select your project')
  console.log('3. Navigate to SQL Editor')
  console.log('4. Copy and paste STEP 1 SQL, then click "Run"')
  console.log('5. Copy and paste STEP 2 SQL, then click "Run"')
  console.log('6. Verify the migration was successful\n')

  // Try to execute (will likely fail, but worth trying)
  console.log('🔄 Attempting to execute via API...')
  const migrationSuccess = await executeSQL(migrationSQL)
  const bucketSuccess = await executeSQL(bucketSQL)

  if (migrationSuccess && bucketSuccess) {
    console.log('✅ Migration executed successfully via API!')
  } else {
    console.log('ℹ️  Please execute the SQL manually in Supabase SQL Editor (see above)')
  }
}

main().catch(console.error)

