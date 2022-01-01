import {useState, createContext, useEffect, useReducer} from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import UserList from "./Components/UserList";
import UserProfile from "./Components/UserProfile";
import EditAddForm from "./Components/EditAddForm";
import reducer from "./Components/reducer";

import Data from "./Components/data"
import AddButton from "./Components/addButton";


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


export const UserContext = createContext([]);
export const ToDoContext = createContext({
    toDoList: [], dispatch: () => {
    }
});

export default function Root() {

    const [userList, setUserList] = useState([]);
    const [finalList, setFinalList] = useState([]);
    const [toDoList, dispatch] = useReducer(reducer, todoList);
    // const [toDoList, dispatch] = useReducer(reducer, Data);

    const getUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUserList(data))
        // .then(data => data.map(item => (setUserList([...userList,{id: item.id, name:item.name, description:item.email, username:item.username, todo:todoList}]))));
    }


    useEffect(() => {
        document.title = 'To Do App';
        getUsers();
    }, []);

    return (
        <BrowserRouter>
            <UserContext.Provider value={userList}>
                <ToDoContext.Provider value={{toDoList, dispatch}}>
                    <Routes>
                        <Route exact path='/' element={<UserList/>}/>
                        <Route path=':id' element={<UserProfile/>}>
                            <Route index element={<AddButton/>}/>
                            <Route path='addEdit' element={<EditAddForm/>}/>
                        </Route>
                    </Routes>
                </ToDoContext.Provider>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
