import { supabase, triggerServerVerification } from './supabase';

export const submitAndVerifyServer = async (serverData, userId) => {
  try {
    const { data, error } = await supabase
      .from('servers')
      .insert([
        {
          ...serverData,
          user_id: userId,
          verification_status: 'pending',
          is_online: false,
        },
      ])
      .select()
      .single();

    if (error) throw error;

    if (data?.id) {
      setTimeout(async () => {
        await triggerServerVerification(data.id);
      }, 2000);
    }

    return { success: true, serverId: data?.id };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const getUserServers = async (userId) => {
  try {
    const { data, error } = await supabase
      .from('servers')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) throw error;
    return { success: true, servers: data || [] };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const deleteUserServer = async (serverId, userId) => {
  try {
    const { error } = await supabase
      .from('servers')
      .delete()
      .eq('id', serverId)
      .eq('user_id', userId);

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};

export const updateUserProfile = async (userId, profileData) => {
  try {
    const { error } = await supabase
      .from('user_profiles')
      .upsert(
        { id: userId, ...profileData, updated_at: new Date().toISOString() },
        { onConflict: 'id' }
      );

    if (error) throw error;
    return { success: true };
  } catch (error) {
    return { success: false, error: error.message };
  }
};
