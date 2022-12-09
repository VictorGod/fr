import { GlobalStyles } from '../../../styles';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { themeDefault } from '../../../styles/themeDefault';

export const MainLayout = () => {
  return (
    <>
      <ThemeProvider theme={themeDefault}>
        <GlobalStyles />
        <Outlet />
      </ThemeProvider>
    </>
  );
};
