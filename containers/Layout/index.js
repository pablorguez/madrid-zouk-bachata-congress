import { Hidden } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../../config/theme';
import Menu from '../../components/Menu';
import MenuMobile from '../../components/MenuMobile';

const Layout = ({ children }) => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Hidden xsDown>
          <Menu />
        </Hidden>
        <Hidden smUp>
          <MenuMobile />
        </Hidden>
        <div>{children}</div>
      </ThemeProvider>
    </>
  );
};

export default Layout;
