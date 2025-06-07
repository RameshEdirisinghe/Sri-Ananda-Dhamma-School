// lib/contentService.ts
import { supabase } from './supabaseClient';

export const getHeroContent = async () => {
  try {
    const { data, error } = await supabase.from('HomeHero').select('*');
    if (error) throw error;
    const mapped: Record<string, string> = {};
    data.forEach((item) => {
      mapped[item.id] = item.content;
    });
    return mapped;
  } catch (err) {
    console.error('🔴 Supabase fetch error:', err);
    return {};
  }
};


export const updateHeroContent = async (id: string, content: string) => {
  const { error } = await supabase
    .from('HomeHero')
    .update({ content })
    .eq('id', id);

  if (error) throw error;
};
