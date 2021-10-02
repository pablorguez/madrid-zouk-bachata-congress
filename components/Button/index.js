import React from 'react';
import { styled } from '@mui/material/styles';
import { ButtonBase } from '@mui/material';

const Button = styled(ButtonBase)(({ theme }) => ({
  color: theme.palette.text,
  fontFamily: theme.typography.fontFamily,
  fontSize: '13px',
  padding: '13px 20px',
  position: 'relative',
  textTransform: 'uppercase',
  transition: ' color .2',

  [theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
  },

  '&:after': {
    content: '""',
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    backgroundColor: theme.palette.button,
    left: 0,
    top: 0,
    zIndex: -1,
    transform: 'scale(1, 0)',
    'transform-origin': 'center 0',
    transition: 'transform 0.2s, transform-origin 0.2s step-start 0.2s',
  },

  '&:hover': {
    color: theme.palette.getContrastText(theme.palette.button),
    '&:after': {
      transform: 'scale(1, 1)',
      'transform-origin': 'center 100%',
    },
  },

  '&.active:before': {
    content: '""',
    position: 'absolute',
    display: 'block',
    width: '100%',
    height: '100%',
    borderBottom: `1px solid ${theme.palette.button}`,
    left: 0,
    top: 0,
    zIndex: -1,
    opacity: 0.5,
  },
}));

export default Button;
