import React from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import {Colors, ItemTypes} from '../Utilities';
import Item from './Item';

export default function Weather() {
  return (
    <>
        <Item varient={ItemTypes.ADD}></Item>
        <Item varient={ItemTypes.WEATHER}></Item>
    </>
  )
}
