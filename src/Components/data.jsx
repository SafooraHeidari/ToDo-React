import {useState, useEffect} from "react";

const todoList = [
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



export default function Data() {

    const [userList, setUserList] = useState([]);
    const [list, setList] = useState([]);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setList(data));
    }

    useEffect(() => {
        document.title = 'To Do App';
        getUsers();
    }, []);

    return (
        <>
            {list.map(item => setUserList([...userList, {id: item.id, name:item.name, description:item.email, username:item.username, todo:todoList}]))};
            [userList]
        </>

    )
}
