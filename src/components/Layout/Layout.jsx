import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import AppBar from '../AppBar/AppBar';
import { GlobalStyle } from '../GlobalStyle';
import { Box } from './Layout.styled';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <Box>
      <AppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <GlobalStyle />
      <Toaster position="top-right" reverseOrder={false} />
    </Box>
  );
};
