import {useContext} from "react";

import ToDoCardList from "./ToDoCardList";
import ProfileCard from "./ProfileCard";
import ProgressCard from "./ProgressCard";
import {Outlet, useParams} from "react-router";
import {ToDoContext} from "../root";

export default function UserProfile(){
    const {userss, dispatch} = useContext(ToDoContext);
    const params = useParams();


    return(
        <>
            {userss.length &&
                <>
                    <ProfileCard name={userss[params.id-1].name} image={'https://i.pravatar.cc/150?img=' + userss[params.id-1].id} description={userss[params.id-1].email}/>
                    <ToDoCardList id = {params.id}/>
                    <ProgressCard/>
                    <Outlet/>
                </>}
        </>
    )
}