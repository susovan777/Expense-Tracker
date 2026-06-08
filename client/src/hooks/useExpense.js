import { useCallback, useEffect, useState } from 'react';
import { getExpenses, searchExpenses } from '../api/expenseApi';

export default function useExpenses() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchExpenses = useCallback(async (searchTerm = '') => {
    try {
      const response = searchTerm
        ? await searchExpenses(searchTerm)
        : await getExpenses();

      setExpenses(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchExpenses();
  }, [fetchExpenses]);

  return {
    expenses,
    loading,
    fetchExpenses,
  };
}
