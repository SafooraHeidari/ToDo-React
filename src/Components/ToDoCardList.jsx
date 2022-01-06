import {useContext} from "react";
import TodoCard from "./TodoCard";
import {Accordion} from "react-bootstrap";
import {ToDoContext} from "../root";

export default function ToDoCardList({id}) {
    const {userss, dispatch} = useContext(ToDoContext);

    return (
        <Accordion className='w-25'>
            {userss.length > 3 &&
                <> {console.log(userss)}
                    {userss[id-1].todo.map(item =>
                        <TodoCard key={item.id} todoId={item.id} todo={item} userId={id} dispatch={dispatch}/>
                    )}
                </>}

        </Accordion>
    )
}
