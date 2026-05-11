// Evomanias-specific server actions for character and highscores data
// This layer allows easy switching between Supabase and your custom MySQL backend

const EVOMANIAS_API_BASE = process.env.NEXT_PUBLIC_EVOMANIAS_API_URL || 'http://localhost:8000/api';

// Fetch highscores with filters
export async function fetchHighscores(filters = {}) {
  try {
    const params = new URLSearchParams();
    
    if (filters.vocation && filters.vocation !== 'All') {
      params.append('vocation', filters.vocation);
    }
    if (filters.search) {
      params.append('search', filters.search);
    }
    if (filters.sortBy) {
      params.append('sort', filters.sortBy === 'Experience' ? 'experience' : 'level');
    }
    if (filters.limit) {
      params.append('limit', filters.limit);
    }

    const response = await fetch(`${EVOMANIAS_API_BASE}/highscores?${params.toString()}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch highscores');
    }

    const data = await response.json();
    return { data: data.highscores || [], total: data.total || 0, error: null };
  } catch (error) {
    console.error('Error fetching highscores:', error);
    return { data: [], total: 0, error: error.message };
  }
}

// Fetch character by ID
export async function fetchCharacter(characterId) {
  try {
    const response = await fetch(`${EVOMANIAS_API_BASE}/characters/${characterId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch character');
    }

    const data = await response.json();
    return { data: data.character, error: null };
  } catch (error) {
    console.error('Error fetching character:', error);
    return { data: null, error: error.message };
  }
}

// Create a new character for the authenticated user
export async function createCharacter(userId, characterData) {
  try {
    const response = await fetch(`${EVOMANIAS_API_BASE}/characters`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userId}`,
      },
      body: JSON.stringify({
        ...characterData,
        userId,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to create character');
    }

    const data = await response.json();
    return { data: data.character, error: null };
  } catch (error) {
    console.error('Error creating character:', error);
    return { data: null, error: error.message };
  }
}

// Fetch user's characters
export async function fetchUserCharacters(userId) {
  try {
    const response = await fetch(`${EVOMANIAS_API_BASE}/users/${userId}/characters`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch user characters');
    }

    const data = await response.json();
    return { data: data.characters || [], error: null };
  } catch (error) {
    console.error('Error fetching user characters:', error);
    return { data: [], error: error.message };
  }
}

// Delete a character
export async function deleteCharacter(characterId, userId) {
  try {
    const response = await fetch(`${EVOMANIAS_API_BASE}/characters/${characterId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${userId}`,
      },
    });

    if (!response.ok) {
      throw new Error('Failed to delete character');
    }

    return { success: true, error: null };
  } catch (error) {
    console.error('Error deleting character:', error);
    return { success: false, error: error.message };
  }
}

// Fetch server status
export async function fetchServerStatus() {
  try {
    const response = await fetch(`${EVOMANIAS_API_BASE}/status`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch server status');
    }

    const data = await response.json();
    return { 
      data: {
        playersOnline: data.playersOnline || 0,
        serverStatus: data.status || 'offline',
        lastUpdate: data.lastUpdate || null,
      }, 
      error: null 
    };
  } catch (error) {
    console.error('Error fetching server status:', error);
    return { 
      data: { 
        playersOnline: 0, 
        serverStatus: 'unknown',
        lastUpdate: null 
      }, 
      error: error.message 
    };
  }
}
