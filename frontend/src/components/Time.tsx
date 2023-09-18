import React from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import {Colors} from '../Colors';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: Colors.background,
    padding: theme.spacing(1)
  }));

export default function Time() {
  return (
    <>
        <Item>xs=4</Item>
    </>
  )
}
