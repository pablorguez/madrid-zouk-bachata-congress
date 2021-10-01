import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { AppBar, Toolbar, Button, Box } from '@mui/material';

import { menu } from '../../utils/menu';

const Menu = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="transparent">
        <Toolbar>
          {menu.map((menuItem, index) => (
            <Link href={menuItem.url} key={index} passHref>
              <Button>
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
