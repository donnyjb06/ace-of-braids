import { createClient } from '@supabase/supabase-js'

// Create Supabase client
if (!process.env.SUPABASE_SERVICE_ROLE || !process.env.SUPABASE_PROJECT_URL) {
  throw new Error("Supabase environment variables not found")
}

export const supabase = createClient(process.env.SUPABASE_PROJECT_URL, process.env.SUPABASE_SERVICE_ROLE);