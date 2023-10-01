import React from 'react'
import { styled } from '@mui/system';
import {Colors, ItemTypes} from '../Utilities';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';


const Task = styled(Accordion)(({ theme }) => ({
  backgroundColor: Colors.primary,
  maxHeight: '32rem',
  Height: '32rem',
}));

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
  varient: number
}

export default function Item(props: Props) {

  if(props.varient === ItemTypes.TASK){
    return (
      <>
          <Task
            square={false}
            disableGutters={true}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Accordion 1</Typography>
            </AccordionSummary>
            <AccordionDetails
            >
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                malesuada lacus ex, sit amet blandit leo lobortis eget.
              </Typography>
            </AccordionDetails>
          </Task>
      </>
    )
  }else if(props.varient == ItemTypes.ADD){
    return (
      <Add>
        <AddCircleOutlineOutlinedIcon sx={{fontSize: 40}}/>
      </Add>
    )
  }else if(props.varient == ItemTypes.TIME){
    return (
      <>
        Time
      </>
    )
  }else{
    return (
      <>
        Weather
      </>
    )
  }
}
