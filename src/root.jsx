import {createContext, useEffect, useReducer} from "react";
import {Route, BrowserRouter, Routes} from "react-router-dom";
import UserList from "./Components/UserList";
import UserProfile from "./Components/UserProfile";
import EditAddForm from "./Components/EditAddForm";
import reducer from "./Components/reducer";

import AddButton from "./Components/addButton";

export const ToDoContext = createContext({
    users: [], dispatch: () => {
    }
});

export default function Root() {
    const [userss, dispatch] = useReducer(reducer, []);

    const getUsers = () => {
        fetch("/api/users")
            .then((res) => res.json())
            .then((json) => {dispatch({type: "initialState" , payload: json.users})})
    }

    useEffect(() => {
        document.title = 'To Do App';
        getUsers();
    }, []);

    return (
        <BrowserRouter>
                <ToDoContext.Provider value={{userss, dispatch}}>
                    <Routes>
                        <Route exact path='/' element={<UserList/>}/>
                        <Route path=':id' element={<UserProfile/>}>
                            <Route index element={<AddButton/>}/>
                            <Route path='addEdit' element={<EditAddForm/>}/>
                        </Route>
                    </Routes>
                </ToDoContext.Provider>
        </BrowserRouter>
    )
}
