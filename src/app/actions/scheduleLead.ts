'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

interface ScheduleDetails {
    leadId: string;
    date: string; // ISO String or readable text
    time: string;
}

export async function scheduleLead({ leadId, date, time }: ScheduleDetails) {
    if (!leadId) return { success: false, error: 'No Lead ID provided' };

    try {
        const { error } = await supabase
            .rpc('schedule_lead_v1', {
                _lead_id: leadId,
                _scheduled_date: date,
                _scheduled_time: time
            });

        if (error) {
            console.error('Supabase Update Error:', error);
            return { success: false, error: error.message };
        }

        return { success: true };
    } catch (err) {
        console.error('Scheduling Error:', err);
        return { success: false, error: 'Failed to update scheduling' };
    }
}
