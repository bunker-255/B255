
import { createClient } from '@supabase/supabase-js';

// Supabase keys from request
const supabaseUrl = 'https://olrdbrmlvfhxjnfgghps.supabase.co';
const supabaseKey = 'sb_publishable_VGpEvhAbnzPM3Wgo1yMxpQ_FuaGs9m9';

export const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function example to submit contact form
export const submitContactForm = async (data: any) => {
  try {
    // Attempt to insert data into the 'contact_requests' table
    const { error } = await supabase.from('contact_requests').insert([data]);
    
    if (error) {
        // Fallback for simulation if table doesn't exist or RLS blocks it
        throw error;
    }
    
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
};
