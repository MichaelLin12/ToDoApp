import React, {useState} from 'react'
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import {Colors,ItemTypes, Task} from '../Utilities';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Item from './Item';
import Modal from '@mui/material/Modal';
import AddTaskForm from './AddTaskForm';

const Header = styled('div')({
    backgroundColor: Colors.primary,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
    paddingTop: '0.5rem',
    paddingBottom: '0.5rem',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
});

const Palette = styled(Paper)(({ theme }) => ({
    backgroundColor: Colors.background,
    padding: theme.spacing(1),
    maxHeight: '32rem',
    Height: '32rem',
    overflowY: 'auto'
}));




export default function ToDo() {
    const [date, setDate] = useState(dayjs());
    const [open, setOpen] = useState(false);
    const [tasks, setTasks] = useState<Task[]>([]);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const add = (task: Task) => {
        setTasks([...tasks, task]);
    }
  return (
    <>
        <Palette elevation={5}>
            <Stack spacing={2}>
                <Header>
                    <DatePicker
                        value={date}
                        onChange={(newValue: any) => {
                            setDate(newValue);
                        }}
                        views={['year', 'month', 'day']}
                        sx={{ backgroundColor: Colors.background,}}
                    />
                </Header>
                <Item varient={ItemTypes.TASK}/>
                <Item varient={ItemTypes.TASK}/>
                <Item varient={ItemTypes.ADD} click={handleOpen}/>
                <Modal
                open={open}
                onClose={handleClose}
                >
                    <AddTaskForm date={date.format('MM-DD-YYYY')} add={add} handleClose={handleClose}/>
                </Modal>
            </Stack>
        </Palette>
    </>
  )
}
