import {useState, useContext} from "react";
import {Link} from "react-router-dom";
import {Button, InputGroup, FormControl} from "react-bootstrap";
import {PlusCircle} from "react-bootstrap-icons";
import {ToDoContext} from "../root";

const RandomID = () => Math.floor(1000 * Math.random())

const data = {
    id: 0,
    category: '',
    title: '',
    subTasks: [],
    deadLine: ''
};

export default function EditAddForm({setCard, card}) {
    const [cntr, setCntr] = useState(0);
    const [curData, setcurData] = useState(data);
    const {toDoList, dispatch} = useContext(ToDoContext);

    const handleSubmit = () => {
        // setCard([...card,curData]);
        dispatch({type: 'AddTodo', payload: {curData}})
    }

    const handleAddSubTask = () => {
        setCntr(cntr + 1);
    }

    return (
        <div style={{width: '20%', display: 'flex', flexDirection: 'column', gap: '10px'}}>

            <InputGroup className="mb-3">
                <InputGroup.Text id="Category">Category</InputGroup.Text>
                <FormControl
                    aria-describedby="Category"
                    value={curData.category}
                    onChange={e => setcurData({...curData, id: RandomID(), category: e.target.value})}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="Title">Title</InputGroup.Text>
                <FormControl
                    aria-describedby="Title"
                    value={curData.title}
                    onChange={e => setcurData({...curData, title: e.target.value})}
                />
            </InputGroup>

            {cntr >= 1 && <FormControl value={curData.subTasks[0]}
                                       onChange={e => setcurData({
                                           ...curData,
                                           subTasks: [curData.subTasks[0] = e.target.value]
                                       })}/>}
            {cntr >= 2 && <FormControl value={curData.subTasks[1]}
                                       onChange={e => setcurData({
                                           ...curData,
                                           subTasks: [curData.subTasks[0], curData.subTasks[1] = e.target.value]
                                       })}/>}
            {cntr >= 3 && <FormControl value={curData.subTasks[2]}
                                       onChange={e => setcurData({
                                           ...curData,
                                           subTasks: [curData.subTasks[0], curData.subTasks[1], curData.subTasks[2] = e.target.value]
                                       })}/>}
            {cntr >= 4 && <FormControl value={curData.subTasks[3]}
                                       onChange={e => setcurData({
                                           ...curData,
                                           subTasks: [curData.subTasks[0], curData.subTasks[1], curData.subTasks[2], curData.subTasks[3] = e.target.value]
                                       })}/>}
            {cntr >= 5 && <FormControl value={curData.subTasks[4]}
                                       onChange={e => setcurData({
                                           ...curData,
                                           subTasks: [curData.subTasks[0], curData.subTasks[1], curData.subTasks[2], curData.subTasks[3], curData.subTasks[4] = e.target.value]
                                       })}/>}
            <PlusCircle onClick={handleAddSubTask}/>
            <InputGroup className="mb-3">
                <InputGroup.Text id="DeadLine">DeadLine</InputGroup.Text>
                <FormControl
                    aria-describedby="DeadLine"
                    value={curData.deadLine}
                    onChange={e => setcurData({...curData, deadLine: e.target.value})}
                />
            </InputGroup>
            <Button variant="primary" onClick={handleSubmit}>
                Submit
            </Button>

        </div>
    )
}