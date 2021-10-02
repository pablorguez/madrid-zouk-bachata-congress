import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { AppBar, Toolbar, Box } from '@mui/material';

import Button from '../Button';
import { menu } from '../../utils/menu';

const Menu = () => {
  const router = useRouter();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          {menu.map((menuItem, index) => (
            <Link href={menuItem.url} key={index} passHref>
              <Button
                disableRipple={true}
                className={router.pathname === menuItem.url ? 'active' : ''}
              >
                <FormattedMessage id={menuItem.label} />
              </Button>
            </Link>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Menu;
