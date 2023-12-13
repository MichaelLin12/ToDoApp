import React from 'react'
import {Colors, ItemTypes} from '../../Utilities';
import { Accordion, AccordionSummary, AccordionDetails, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/system';

const Task = styled(Accordion)(({ theme }) => ({
    backgroundColor: Colors.primary,
    maxHeight: '32rem',
    Height: '32rem',
  }));

export default function TaskItem() {
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
}
