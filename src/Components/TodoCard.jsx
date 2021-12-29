import {Accordion, Card, useAccordionButton} from "react-bootstrap";
import {useState} from "react";
import {Pen, X, PlusCircle, CaretDown, ArrowBarDown, ChevronDown} from 'react-bootstrap-icons';

const TodoCard = ({todo,setDataList, dataList}) => {
    const [toDo, setToDo] = useState(todo)

    const handleAddToDo = () => {
        setToDo({...toDo, subTasks:[...toDo.subTasks , prompt('Enter the todo:')]})
    }
    const handleDelete = (item) => {
        setToDo({...toDo, subTasks: [...toDo.subTasks.filter(todo => todo !== item)]})
    }
    const handleEdit = (item) => {
        setToDo({...toDo, subTasks:[...toDo.subTasks.filter(todo => todo !== item), prompt('Edit the todo:', item)]})
    }
    const handleDeleteTask = (id) => {
        setDataList(dataList.filter(item => item.id !== id))
    }

    return (
        <Card className="text-center">
                <Card.Header>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <ChevronDown onClick={useAccordionButton(toDo.id)}/>
                        {toDo.title}
                        <X onClick={() => handleDeleteTask(toDo.id)}/>
                    </div>
                </Card.Header>
            <Accordion.Collapse eventKey={toDo.id}>
                <Card.Body>
                    <Card.Title>{toDo.category}</Card.Title>
                    {
                        toDo.subTasks.map((item, index) =>
                            <div key={index} style={{display:'flex',justifyContent:'space-around'}}>
                                <Card.Text>
                                    {item}
                                </Card.Text>
                                <Card.Text>
                                    <Pen onClick={() => handleEdit(item)}/>
                                    <X onClick={() => handleDelete(item)}/>
                                </Card.Text>
                            </div>
                        )
                    }
                    <PlusCircle onClick={handleAddToDo}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}

export default TodoCard