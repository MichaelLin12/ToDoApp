import React, {useState} from 'react'
import {v1 as uuidv1} from 'uuid';
import {Title, Description, TextBox, ModalBody, ModalFooter, ModalHeader, ModalTitle, ModalContent, ModalFrame, TitleInput, SubmitButton} from './styledComponents'

export default function Modal(props) {
    const [task, setTask] = useState({});

    const onSubmit = () => {
        console.log(task);
        let newTask = {...task, id: uuidv1()};
        console.log('Added ID',newTask);
        newTask = {...newTask, date_column: props.date};
        console.log('Added Date',newTask);
        setTask(newTask);
        console.log('Task',task);
        setTask(newTask);
        props.setTasks([...props.tasks, task]);
        const addTask = async () => {
            try {
                const response = await fetch('http://localhost:3001/addItem', {
                    method: "POST",
                    body: JSON.stringify(newTask),
                    headers: {"Content-Type": "application/json"}
                });
                const jsonData = await response.json();
                console.log('JSON DATA',jsonData);
            } catch (err) {
                console.error(err.message);
            }
        }
        addTask().then(()=>{
            console.log('Task added');
            setTask({}); // reset task
        });
        props.onClose();
    }

    const changeTitle = (e) => {
        setTask({...task, task_column: e.target.value});
    }

    const changeDescription = (e) => {
        setTask({...task, description_column: e.target.value});
    }

    const description = ()=>{
        return (
        <Description>
            <label>Description</label>
            <TextBox placeholder='Type in a description' onChange={changeDescription}/>
        </Description>
        )
    }
    
    const title = ()=>{
        return (
        <Title>
            <label>Title</label>
            <TitleInput type='text' id='title' name='title' placeholder='Enter a task title' onChange={changeTitle}/>
        </Title>
        )
    }

    if (!props.showModal) {
        return null;
    }
  return (
    <ModalFrame onClick={props.onClose}>
        <ModalContent onClick={e => e.stopPropagation()}>
            <ModalHeader>
                <ModalTitle>Add Task</ModalTitle>
            </ModalHeader>
            <ModalBody>
                {title()}
                {description()}
            </ModalBody>
            <ModalFooter>
                <SubmitButton data-dismiss='modal' onClick={onSubmit}>Submit</SubmitButton>
            </ModalFooter>
        </ModalContent>
    </ModalFrame>
  )
}
