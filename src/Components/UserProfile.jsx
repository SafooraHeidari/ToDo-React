import {useContext} from "react";

import ToDoCardList from "./ToDoCardList";
import ProfileCard from "./ProfileCard";
import ProgressCard from "./ProgressCard";
import {Outlet, useParams} from "react-router";
import {ToDoContext} from "../root";
import styles from "./UserProfile.style.module.css"
import {Col, Container, Row} from "react-bootstrap";

export default function UserProfile(){
    const {userss, dispatch} = useContext(ToDoContext);
    const params = useParams();


    return(
        <div className={styles.globalContainer}>
            {userss.length &&
                <Container className={styles.profileCardsContainer}>
                    <Row>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <ProfileCard name={userss[params.id-1].name} image={'https://i.pravatar.cc/150?img=' + userss[params.id-1].id} description={userss[params.id-1].email}/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4}>
                            <ToDoCardList id = {params.id}/>
                        </Col>
                        <Col xs={12} sm={6} md={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <Outlet/>
                        </Col>
                    </Row>
                    {/*<ProgressCard percent={userss[params.id-1].progressPercent}/>*/}
                </Container>}
        </div>
    )
}