import {Link} from "react-router-dom";

import {Accordion, Card, useAccordionButton} from "react-bootstrap";
import {Pen, X, PlusCircle, ChevronDown, Circle, CheckCircleFill} from 'react-bootstrap-icons';

export default function TodoCard ({todoId, todo, userId, dispatch}) {

    const handleAddSubTask = () => {
        dispatch({type: 'handleAddSubTask', payload: {userId: userId, todoId: todoId, title: prompt('Enter the todo:')}})
    }
    const handleDeleteSubTask = (item) => {
        dispatch({type:'handleDeleteSubTask',payload:{userId: userId, todoId: todoId, taskName: item}})
    }
    const handleEditSubTask = (item) => {
        dispatch({type:"handleEditSubTask", payload:{userId: userId, todoId: todoId, oldTaskName: item, newTaskName: prompt('Edit the todo:', item)}})
    }
    const handleDeleteTask = (id) => {
        dispatch({type: 'deleteTask', payload: {userId: userId, todoId: id}})
    }
    const changeTaskStatus = (id) => {
        dispatch({type: 'changeStatus', payload: {userId: userId, todoId: id}})
    }
    return (
        <>
        <Card>
                <Card.Header>
                    <div className='d-flex justify-content-between align-items-baseline'>
                        <ChevronDown style={{cursor:'pointer'}} onClick={useAccordionButton(todo.id)}/>
                        {todo.title}
                        <div className='d-flex justify-content-between align-items-center w-25'>
                            <Link to={`addEdit`} state={{todo:todo}}>
                                <Pen style={{cursor:'pointer'}} className='text-dark'/>
                            </Link>
                            {todo.done ? <CheckCircleFill className='text-success' onClick={() => changeTaskStatus(todo.id)}/>
                                : <Circle style={{cursor:'pointer'}} onClick={() => changeTaskStatus(todo.id)}/>}
                            <X style={{cursor:'pointer'}} onClick={() => handleDeleteTask(todo.id)}/>
                        </div>
                    </div>
                </Card.Header>
            <Accordion.Collapse eventKey={todo.id}>
                <Card.Body>
                    <Card.Title className='text-center'>{todo.category}</Card.Title>
                    {
                        todo.subTasks.map((item, index) =>
                            <div key={index} className='d-flex justify-content-between'>
                                <Card.Text>
                                    {item}
                                </Card.Text>
                                <Card.Text className='d-flex justify-content-between'>
                                    <Pen style={{cursor:'pointer'}} onClick={() => handleEditSubTask(item)}/>
                                    <X style={{cursor:'pointer'}} onClick={() => handleDeleteSubTask(item)}/>
                                </Card.Text>
                            </div>
                        )
                    }
                    <div className='text-center'>
                        <PlusCircle style={{cursor:'pointer'}} onClick={handleAddSubTask}/>
                    </div>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
        </>
    )
}
