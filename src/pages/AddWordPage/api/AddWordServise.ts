// api.ts
import axios from 'axios';

export async function fetchCategories(): Promise<string[]> {
  try {
    const response = await axios.get<string[]>('/api/categories'); 
    return response.data;
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}
