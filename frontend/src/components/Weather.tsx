import React from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import {Colors} from '../Utilities';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: Colors.background,
    padding: theme.spacing(1)
  }));

export default function Weather() {
  return (
    <>
        <Item elevation={2}>xs=4</Item>
    </>
  )
}
