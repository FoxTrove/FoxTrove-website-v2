'use server';

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export interface LeadData {
    name: string;
    email: string;
    website?: string;
    vertical?: string;
    source?: string;
    metadata?: Record<string, any>;
    // Legacy fields mapped to metadata if needed, or kept optional
    revenue?: string; 
    teamSize?: string;
    crm?: string;
    magicWand?: string;
}

export async function submitLead(data: LeadData) {
    console.log(`Submitting lead (${data.vertical || 'general'}):`, data.email);

    try {
        // Construct the payload. We keep the explicit columns for backward compatibility / ease of access
        // and dump specific calculator data into metadata.
        const payload = {
            name: data.name,
            email: data.email,
            website: data.website,
            vertical: data.vertical || 'general',
            source: data.source || 'website',
            metadata: {
                ...data.metadata,
                revenue: data.revenue,
                teamSize: data.teamSize,
                crm: data.crm,
                magicWand: data.magicWand
            },
            // Map legacy fields if the RPC isn't used anymore and we are inserting directly.
            // Note: If you still use the RPC, you might need to keep the old call or update the RPC.
            // Switching to direct insert for flexibility as per plan.
            revenue: data.revenue, 
            team_size: data.teamSize,
            crm: data.crm,
            magic_wand_answer: data.magicWand
        };

        // We use direct insert to bypass the strict signature of the v1 RPC
        // Ensure you have RLS policies set up to allow INSERT on 'leads' table for public/anon if needed
        const { data: result, error } = await supabase
            .from('leads')
            .insert([payload])
            .select('id')
            .single();

        if (error) {
            console.error('Supabase Error:', error);
            // Fallback to RPC if direct insert fails (e.g. if columns don't exist yet but RPC does)
            // validating the user ran the SQL script.
            return { success: false, error: error.message };
        }

        return { success: true, leadId: result.id };
    } catch (err) {
        console.error('Submission Error:', err);
        return { success: false, error: 'Failed to submit application.' };
    }
}
