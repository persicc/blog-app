import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://eosrwddrrxcalhdusnvk.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVvc3J3ZGRycnhjYWxoZHVzbnZrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg0NjI2NDcsImV4cCI6MjA1NDAzODY0N30.BloPIqOL33qFkh0Tz8_Nj4V9f9h4t0B2xIgRzIZto9w";
export const supabase = createClient(supabaseUrl, supabaseKey);
