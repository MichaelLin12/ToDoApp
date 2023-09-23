import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Colors} from './Utilities';
import Container from '@mui/material/Container';
import Weather from './components/Weather';
import Time from './components/Time';
import ToDo from './components/ToDo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container maxWidth="xl" sx={{bgcolor: Colors.background}}>
        <Box
        sx={{
          width: '100%',
          height: '100vh',
          display: 'flex', 
          justifyContent: 'center',
          alignItems: 'center', 
          bgcolor: Colors.background
        }}
        >
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Weather />
            </Grid>
            <Grid item xs={4}>
              <ToDo />
            </Grid>
            <Grid item xs={4}>
              <Time />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </LocalizationProvider>
  );
}

export default App;
