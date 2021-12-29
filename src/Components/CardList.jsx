import TodoCard from "./TodoCard";
import {Accordion} from "react-bootstrap";



export default function CardList({card,setCard}) {
    return (
        <Accordion className='w-25'>
            {card.map(item =>
                <TodoCard key={item.id} todo={item} setDataList={setCard} dataList={card}/>
            )}
        </Accordion>
    )
}
