import { useEffect, useState } from 'react';
import { getCategories } from '../api/expenseApi';

export default function useCategories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const response = await getCategories();

        setCategories(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    loadCategories();
  }, []);

  return categories;
}
