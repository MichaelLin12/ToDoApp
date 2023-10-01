import React from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import Item from './Item';
import {Colors, ItemTypes} from '../Utilities';

export default function Time() {
  return (
    <>
        <Item varient={ItemTypes.ADD}></Item>
        <Item varient={ItemTypes.TIME}></Item>
    </>
  )
}
