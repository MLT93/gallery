import { Route, Routes } from 'react-router-dom';
import { LoginPage } from '../views/auth/pages/login/LoginPage';
import { ErrorPage } from '../views/error/ErrorPage';

export const AppRouter = () => {
  return (
    <Routes>
      <Route index path="/login" element={<LoginPage />} />

      <Route path="*" element={<ErrorPage error='404 Not Found' />} />
    </Routes>
  );
};
