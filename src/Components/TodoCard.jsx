import {Link} from "react-router-dom";

import {Accordion, Card, useAccordionButton} from "react-bootstrap";
import {Pen, X, PlusCircle, ChevronDown} from 'react-bootstrap-icons';

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

    return (
        <Card className="text-center">
                <Card.Header>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <ChevronDown onClick={useAccordionButton(todo.id)}/>
                        {todo.title}
                        <Link to={`addEdit`} state={{todo:todo}}>
                            <Pen/>
                        </Link>
                        <X onClick={() => handleDeleteTask(todo.id)}/>
                    </div>
                </Card.Header>
            <Accordion.Collapse eventKey={todo.id}>
                <Card.Body>
                    <Card.Title>{todo.category}</Card.Title>
                    {
                        todo.subTasks.map((item, index) =>
                            <div key={index} style={{display:'flex',justifyContent:'space-around'}}>
                                <Card.Text>
                                    {item}
                                </Card.Text>
                                <Card.Text>
                                    <Pen onClick={() => handleEditSubTask(item)}/>
                                    <X onClick={() => handleDeleteSubTask(item)}/>
                                </Card.Text>
                            </div>
                        )
                    }
                    <PlusCircle onClick={handleAddSubTask}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
