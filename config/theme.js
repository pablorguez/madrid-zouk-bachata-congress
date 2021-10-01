import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    background: {
      main: '#252838',
    },
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: [
      'Cerebri Sans',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

export { theme };
