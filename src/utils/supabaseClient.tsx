import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://vtcezvtqcbaymehpedtp.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ0Y2V6dnRxY2JheW1laHBlZHRwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQzMjQxMjMsImV4cCI6MjA1OTkwMDEyM30.baDAKd7Sp5W-2Cz6TuGaWQt6lvGcdU-9d5NetWtKeYc";
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
