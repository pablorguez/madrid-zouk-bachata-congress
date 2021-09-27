import { Container, Hidden } from '@mui/material';
import Menu from '../../components/Menu';
import MenuMobile from '../../components/MenuMobile';

const Layout = ({ children }) => {
  return (
    <>
      <Hidden xsDown>
        <Menu />
      </Hidden>
      <Hidden smUp>
        <MenuMobile />
      </Hidden>
      <Container maxWidth="xl">{children}</Container>
    </>
  );
};

export default Layout;
