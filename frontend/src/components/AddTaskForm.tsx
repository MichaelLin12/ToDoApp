import React, {useState} from 'react'
import { TextField, Typography, Button, Paper } from '@mui/material'
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { styled } from '@mui/system';
import {Colors, Task} from '../Utilities';


const Time = styled('div')({
    marginBottom: '1rem',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
});

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 518,
    bgcolor: 'background.paper',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    p: 4,
  };

interface Props{
    date: string,
    add: (task: Task) => void
    handleClose: () => void
}

export default function AddTaskForm(props: Props) {
    const [task, setTask] = useState<Task>({
        id: 0,
        title: '',
        description: '',
        date: props.date,
        start: '',
        end: ''
    });
    const submit = () => {
        props.add(task);
        setTask({
            id: 0,
            title: '',
            description: '',
            date: props.date,
            start: '',
            end: ''
        });
        props.handleClose();
    }
  return (
    <Paper sx={style}>
        <Typography variant='h5' sx={{textAlign: 'center', marginBottom:'1rem'}}>
            Add Task
        </Typography>
        <TextField
            required
            id='Title'
            label='Title'
            variant='outlined'
            fullWidth
            sx={{marginBottom:'1rem'}}
            value={task.title}
            onChange={(e) => setTask({...task, title: e.target.value})}
            />
        <TextField
            disabled
            id='Date'
            label='Date'
            variant='outlined'
            fullWidth
            value={task.date}
            sx={{marginBottom:'1rem'}}
            />
        <Time>
            <TimePicker
                label='start'
                value={task.start || ''}
                onChange={(value)=> setTask({...task, start: value || ''})}
                />
            <TimePicker
                label='end'
                value={task.end || ''}
                onChange={(value) => setTask({...task, end: value || ''})}
                />
        </Time>
        <TextField
            id='Description'
            label='Description'
            variant='outlined'
            multiline
            fullWidth
            rows={5}
            sx={{marginBottom:'1rem'}}
            value={task.description}
            onChange={(e) => setTask({...task, description: e.target.value})}
            />
        <Button variant='contained' onClick={submit}>Add Task</Button>
    </Paper>
  )
}
