import {useContext, useState} from "react";
import TodoCard from "./TodoCard";
import {Accordion} from "react-bootstrap";
import {ToDoContext} from "../root";

export default function ToDoCardList({id}) {
    const {userss, dispatch} = useContext(ToDoContext);
    const [filter, setFilter] = useState(1);

    return (
        <Accordion className='w-25'>
            {userss.length > 1 &&
                <>
                    {userss[id-1].todo.map(item =>
                            <TodoCard key={item.id} todoId={item.id} todo={item} userId={id} dispatch={dispatch}/>
                    )}
                </>}

        </Accordion>
    )
}
