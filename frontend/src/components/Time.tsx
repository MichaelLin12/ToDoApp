import React, {useState} from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import {Colors, ItemTypes} from '../Utilities';
import AddItem from './Items/AddItem';
import TimeItem from './Items/TimeItem';
import Stack from '@mui/material/Stack';

const Palette = styled(Paper)(({ theme }) => ({
  backgroundColor: Colors.background,
  padding: theme.spacing(1),
  maxHeight: '32rem',
  Height: '32rem',
  overflowY: 'auto'
}));

export default function Time() {

  const [locations, setLocations] = useState<string[]>([]);

  const addCity = () => {
    setLocations([...locations, 'help']);
  }

  const updateWeatherItems = () => {
    let weather: any[] = []; // must change this any type to React Component type
    locations.forEach((city) => {
      weather.push(<TimeItem></TimeItem>);
    });

    return weather;
  }

  return (
    <Palette elevation={5}>
      <Stack spacing={2}>
        {updateWeatherItems()}
        <AddItem click={addCity}></AddItem>
      </Stack>
    </Palette>
  )
}
