import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://tihlmeimrqgnmffxlqhk.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpaGxtZWltcnFnbm1mZnhscWhrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDgwODg2MjksImV4cCI6MjAyMzY2NDYyOX0.4ztQjPuRksV3xBMK51qkTDH10FtuTlTH9UtQtIOy4Zk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
