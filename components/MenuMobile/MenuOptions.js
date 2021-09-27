import React from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

import { menu } from '../../utils/menu';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({ list: { width: 250 } }));

const MenuOptions = (props) => {
  const classes = useStyles();
  const { onClose, open } = props;
  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={onClose}
      onKeyDown={onClose}
    >
      <List>
        {menu.map((menuItem, index) => (
          <Link href={menuItem.url} key={index} passHref>
            <ListItem button component="a">
              <ListItemText>
                <FormattedMessage id={menuItem.label} />
              </ListItemText>
            </ListItem>
          </Link>
        ))}
      </List>
    </div>
  );
  return (
    <Drawer anchor={'left'} open={open} onClose={onClose}>
      {list()}
    </Drawer>
  );
};

export default MenuOptions;
