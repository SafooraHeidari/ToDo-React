import {useContext} from "react";

import ToDoCardList from "./ToDoCardList";
import ProfileCard from "./ProfileCard";
import ProgressCard from "./ProgressCard";
import {Outlet, useParams} from "react-router";
import {ToDoContext} from "../root";
import styles from "./UserProfile.style.module.css"

export default function UserProfile(){
    const {userss, dispatch} = useContext(ToDoContext);
    const params = useParams();


    return(
        <div className={styles.globalContainer}>
            {userss.length &&
                <>
                    {console.log(userss[params.id - 1])}
                    <ProfileCard name={userss[params.id-1].name} image={'https://i.pravatar.cc/150?img=' + userss[params.id-1].id} description={userss[params.id-1].email}/>
                    <ToDoCardList id = {params.id}/>
                    <ProgressCard percent={userss[params.id-1].progressPercent}/>
                    <Outlet/>
                </>}
        </div>
    )
}