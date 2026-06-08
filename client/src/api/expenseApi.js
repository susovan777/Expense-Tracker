import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export const getDashboard = async () => {
  const response = await api.get('/dashboard');
  return response.data;
};

export const getExpenses = async (category) => {
  const response = await api.get('/expenses', {
    params: {
      category,
    },
  });

  return response.data;
};

export const searchExpenses = async (query) => {
  const response = await api.get('/expenses/search', {
    params: {
      q: query,
    },
  });

  return response.data;
};

export const getCategories = async () => {
  const response = await api.get('/categories');
  return response.data;
};

export const createExpense = async (payload) => {
  const response = await api.post('/expenses', payload);

  return response.data;
};

export const updateExpense = async (id, payload) => {
  const response = await api.put(`/expenses/${id}`, payload);

  return response.data;
};

export const deleteExpense = async (id) => {
  const response = await api.delete(`/expenses/${id}`);

  return response.data;
};

