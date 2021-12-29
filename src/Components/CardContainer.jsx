import CardList from "./CardList";
import {Image} from "react-bootstrap";
import image from '../img_avatar2.png'
import CategoryCard from "./CategoryCard";
import EditAddForm from "./EditAddForm";
import {useState} from "react";


const data = [
    {
        id: 1,
        category: 'uni',
        title: 'proposal',
        subTasks: ['abstract', 'main', 'conclusion'],
        deadLine: '2'
    },
    {
        id: 2,
        category: 'home',
        title: 'shopping',
        subTasks: ['milk', 'cheese', 'bread'],
        deadLine: '1'
    },
    {
        id: 3,
        category: 'work',
        title: 'i-shan',
        subTasks: ['admin', 'mentoring', 'bootcamp'],
        deadLine: '3'
    },
    {
        id: 4,
        category: 'uni',
        title: 'meeting',
        subTasks: ['dr1', 'dr2'],
        deadLine: '2'
    },
    {
        id: 5,
        category: 'uni',
        title: 'meeting',
        subTasks: ['dr1', 'dr2'],
        deadLine: '2'
    }];


export default function CardContainer(){
    const [card, setCard] = useState(data);
    return(
        <>
            <Image style={{width:'100px'}} src={image} roundedCircle />
            <CardList card={card} setCard={setCard}/>
            <CategoryCard/>
            <EditAddForm setCard={setCard} card={card}/>
        </>
    )
}