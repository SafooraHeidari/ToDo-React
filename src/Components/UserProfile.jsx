import {useEffect, useState, useContext} from "react";
import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

import ToDoCardList from "./ToDoCardList";
import EditAddForm from "./EditAddForm";
import ProfileCard from "./ProfileCard";
import ProgressCard from "./ProgressCard";
import {useParams} from "react-router";
import {UserContext} from "../root";


const toDoList = [
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


export default function UserProfile({name, image, description}){
    const [card, setCard] = useState(toDoList);
    const params = useParams();
    const [user, setUser] = useState({});
    const getUser = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
            .then(response => response.json())
            .then(data => setUser(data));
    }
    useEffect(() => {
        getUser();
    }, []);

    return(
        <>
            <ProfileCard name={user.name} image={'https://robohash.org/' + user.username} description={user.email}/>
            <ToDoCardList card={card} setCard={setCard}/>
            <ProgressCard/>
            <Button style={{width:'20%'}} variant="secondary">
                <Link to='/addEdit'>Plus</Link>
            </Button>
            {/*<EditAddForm setCard={setCard} card={card}/>*/}
        </>
    )
}