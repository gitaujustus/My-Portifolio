
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://mccaqzucnjhorjnurwlo.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1jY2FxenVjbmpob3JqbnVyd2xvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzgyNjcxMDgsImV4cCI6MTk5Mzg0MzEwOH0.RrGGoGKeNlLOm5LeEdAyu0voU3OIHRRtxoIDSQoDQ5M"
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;