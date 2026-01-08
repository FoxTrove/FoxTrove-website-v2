'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface LeadData {
    name: string;
    email: string;
    website: string;
    revenue: string;
    teamSize: string;
    crm: string;
    magicWand: string;
}

export async function submitLead(data: LeadData) {
    console.log('Submitting lead:', data.email);

    try {
        const { data: leadID, error } = await supabase
            .rpc('submit_lead_v1', {
                _name: data.name,
                _email: data.email,
                _website: data.website,
                _revenue: data.revenue,
                _team_size: data.teamSize,
                _crm: data.crm,
                _magic_wand_answer: data.magicWand
            });

        if (error) {
            console.error('Supabase Error:', error);
            return { success: false, error: error.message };
        }

        return { success: true, leadId: leadID };
    } catch (err) {
        console.error('Submission Error:', err);
        return { success: false, error: 'Failed to submit application.' };
    }
}
