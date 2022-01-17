import {Fragment, useContext, useState} from "react";
import TodoCard from "./TodoCard";
import {Accordion, ButtonGroup, Button} from "react-bootstrap";
import {ToDoContext} from "../root";
import AddButton from "./addButton";

export default function ToDoCardList({id}) {
    const {userss, dispatch} = useContext(ToDoContext);
    const [filter, setFilter] = useState(1);

    return (
        <Fragment className='text-center d-flex align-items-center justify-content-center'>
            <Accordion className='w-100'>
                <ButtonGroup aria-label="Basic example" className='d-flex align-items-center justify-content-center mb-3'>
                    <Button onClick={() => setFilter(1)} variant="secondary">All</Button>
                    <Button onClick={() => setFilter(2)} variant="secondary">Complete</Button>
                    <Button onClick={() => setFilter(3)} variant="secondary">Active</Button>
                </ButtonGroup>
                <>
                    {filter === 1 && userss[id-1].todo.map(item =>
                        <TodoCard key={item.id} todoId={item.id} todo={item} userId={id} dispatch={dispatch}/>
                    )}
                    {filter === 2 && userss[id-1].todo.map(item => item.done ?
                        <TodoCard key={item.id} todoId={item.id} todo={item} userId={id} dispatch={dispatch}/>
                        : <></>
                    )}
                    {filter === 3 && userss[id-1].todo.map(item => !item.done ?
                        <TodoCard key={item.id} todoId={item.id} todo={item} userId={id} dispatch={dispatch}/>
                        : <></>
                    )}
                </>
            </Accordion>
        </Fragment>
    )
}
