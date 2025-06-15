// src/components/app/protected-route.tsx
import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useSelector } from '../../services/store';
import { RootState } from '../../services/store';

export const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const location = useLocation();
  const { isAuth } = useSelector((state: RootState) => state.auth);

  if (!isAuth) {
    return <Navigate to='/login' state={{ from: location }} replace />;
  }

  return children;
};
