import React,{useState} from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import {Colors, ItemTypes} from '../Utilities';
import AddWeatherItem from './Items/AddWeatherItem';
import WeatherItem from './Items/WeatherItem';
import Stack from '@mui/material/Stack';
import { Box, Popper, TextField } from '@mui/material';

const Palette = styled(Paper)(({ theme }) => ({
  backgroundColor: Colors.background,
  padding: theme.spacing(1),
  maxHeight: '32rem',
  Height: '32rem',
  overflowY: 'auto'
}));

const SearchBarBox = styled(Box)(({ theme }) => ({
  border: '1px solid', // Border style should include 'solid' and specify the unit
  padding: theme.spacing(1), // Use theme.spacing for consistent spacing
  backgroundColor: Colors.background, // Accessing background color from theme
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'space-between',
  width: '100%',
  flexDirection: 'column',
}));

const Button = styled('button')(({ theme }) => ({
  backgroundColor: Colors.primary,
  color: Colors.text,
  border: '1px solid',
  padding: theme.spacing(1),
  width: '100%',
  '&:hover': {
    backgroundColor: Colors.primary,
    color: Colors.text,
  },
}));

export default function Weather() {
  const [cities, setCities] = useState<string[]>([]);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [city, setCity] = useState<string>('');

  const addCity = () => {
    setCities([...cities, city]);
    setCity('');
    setAnchorEl(null);
  }

  const updateWeatherItems = () => {
    let weather: any[] = []; // must change this any type to React Component type
    cities.forEach((city) => {
      weather.push(<WeatherItem></WeatherItem>);
    });

    return weather;
  }

  

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <Palette elevation={5}>
      <Stack spacing={2}>
        {updateWeatherItems()}
        <AddWeatherItem click={handleClick}></AddWeatherItem>
        <Popper id={id} open={open} anchorEl={anchorEl} placement="bottom-start" sx={{padding:'3px'}}>
          <SearchBarBox>
            <TextField id="outlined-basic" label="location" variant="outlined" sx={{borderRadius:0}} value={city} onChange={(e)=>setCity(e.target.value)}/>
            <Button onClick={addCity}>Add</Button>
          </SearchBarBox>
        </Popper>
      </Stack>
    </Palette>
  )
}


