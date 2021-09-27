import React, { useState } from 'react';
import Link from 'next/link';
import { AppBar, Toolbar, IconButton } from '@mui/material';
import { Menu } from '@mui/icons-material';
import MenuOptions from './MenuOptions';

const MenuMobile = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpen(open);
  };

  return (
    <>
      <AppBar position="fixed" color="default">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <Menu />
          </IconButton>
        </Toolbar>
      </AppBar>
      <MenuOptions open={open} onClose={toggleDrawer(false)} />
    </>
  );
};

export default MenuMobile;
