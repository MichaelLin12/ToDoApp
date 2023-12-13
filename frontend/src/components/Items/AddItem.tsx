import React from 'react'
import { styled } from '@mui/system';
import { Colors } from '../../Utilities';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const Add = styled('div')({
    backgroundColor: Colors.primary,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '3rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    '&:hover': {
      boxShadow: '0px 8px 12px rgba(0, 0, 0, 0.2)', // Increase shadow on hover
      cursor: 'pointer',
    },
  });

interface Props{
    click?: () => void
}

export default function AddItem(props: Props) {
  return (
    <Add>
    <AddCircleOutlineOutlinedIcon sx={{fontSize: 40}} onClick={props.click}/>
  </Add>
  )
}
