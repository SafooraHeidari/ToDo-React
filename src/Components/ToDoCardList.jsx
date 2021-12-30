import {useContext} from "react";
import TodoCard from "./TodoCard";
import {Accordion} from "react-bootstrap";
import {ToDoContext} from "../root";

export default function ToDoCardList({card,setCard}) {
    const {toDoList, dispatch} = useContext(ToDoContext);

    return (
        <Accordion className='w-25'>
            {toDoList.map(item =>
                <TodoCard key={item.id} todo={item} setDataList={setCard} dataList={card} dispatch={dispatch}/>
            )}
        </Accordion>
    )
}
