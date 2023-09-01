import React from 'react'
import { Container, Paper,Top,Bottom,List,IconButton,ListItem } from './styledComponents.js'
import {FaCalendar,} from 'react-icons/fa';
import {FiPlus} from 'react-icons/fi';
import {IoCaretBackSharp,IoCaretForwardSharp} from 'react-icons/io5';
import {MdDelete} from 'react-icons/md';
import {useLocation,useNavigate} from 'react-router-dom';
import {useState,useEffect} from 'react';
import Modal from './Modal.js';
import {v1 as uuid} from 'uuid';
import { MdOutlineDescription } from 'react-icons/md';
import Tooltip from '@mui/material/Tooltip';

export default function Task() {
  const {state} = useLocation();
  const [date, setDate] = useState(new Date(state.year, state.month-1, state.day));
  const [tasks, setTasks] = useState([]);
  const [list, setList] = useState([]);
  const [showModalAdd, setShowModalAdd] = useState(false);
  const navigate = useNavigate();

  const changeDate = (value) => {
    setDate(new Date(date.getFullYear(), date.getMonth(), date.getDate()+value));
  }


  useEffect(() => {
    const getTasks = async () => {
      try {
        const response = await fetch(`http://localhost:3001/getItems/${date.toISOString().slice(0,10)}`);
        const jsonData = await response.json();
        console.log(jsonData);
        setTasks(jsonData);
      } catch (err) {
        console.error(err.message);
      }
    }
    getTasks();
  }, [date]);

  useEffect(() => {

    const handleDelete = (id) => {
      // find the index of the item to be deleted
      const index = tasks.findIndex((item)=>item.id===id);
      // delete the item from the tasks array
      setTasks([...tasks.slice(0,index),...tasks.slice(index+1)]);
  
      const deleteTask = async () => {
        try {
          const response = await fetch(`http://localhost:3001/deleteItem/${id}`, {method: "DELETE"});
          const jsonData = await response.json();
          console.log(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      }
      deleteTask();
    }


    setList(tasks.map((item) => {
      const longText = item.description_column;
      return (
      <ListItem key={uuid()}> 
        <span>{item.task_column}</span>
        <Tooltip title={longText}><IconButton><MdOutlineDescription size={20}/></IconButton></Tooltip>
        <span><IconButton><MdDelete size={20} onClick={()=>{handleDelete(item.id)}}/></IconButton></span>
      </ListItem>
      )
    }));
  },[tasks]);




  return (
    <Container>
      <Paper>
        <Top>
          <span><IconButton><FaCalendar size={20} onClick={()=>{navigate('/')}}/></IconButton></span> 
          <span>{date.toDateString()}</span> 
          <span><IconButton><FiPlus size={20} onClick={()=>{setShowModalAdd(true)}}/></IconButton><Modal showModal={showModalAdd} onClose={()=>setShowModalAdd(false)} setTasks={setTasks} tasks={tasks} date={date}/></span>
        </Top>
        <List>
          {list}
        </List>
        <Bottom>
          <span><IconButton><IoCaretBackSharp size={20} onClick={()=>{changeDate(-1)}}/></IconButton></span>
          <span><IconButton><IoCaretForwardSharp size={20} onClick={()=>{changeDate(1)}}/></IconButton></span>
        </Bottom>
      </Paper>
    </Container>
  )
}
