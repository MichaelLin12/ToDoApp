import React from 'react'
import { styled } from '@mui/system';
import {Colors} from '../Colors';

const Item = styled('div')({
    backgroundColor: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    borderRadius: '1rem',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem'
});

export default function StackItem() {
  return (
    <>
        <Item>
            Item
        </Item>
    </>
  )
}
