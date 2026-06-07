import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layouts/MainLayout.jsx';
import Dashboard from '../pages/Dashboard.jsx';
import Expenses from '../pages/Expenses.jsx';

const AppRoutes = () => {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/expenses" element={<Expenses />} />
      </Routes>
    </MainLayout>
  );
};

export default AppRoutes;
