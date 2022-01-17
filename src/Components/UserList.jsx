import {useState,useContext} from "react";
import {Link} from "react-router-dom";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import styles from "./UserList.style.module.css"

import ProfileCard from "./ProfileCard";
import {ToDoContext} from "../root";
import {Search} from "react-bootstrap-icons";

const UserList = () => {
    const {userss, dispatch} = useContext(ToDoContext);
    const [userfilter, setUserfilter] = useState('');

    return (
        <div className={styles.globalContainer}>
            <Container className={styles.profileCardsContainer}>
                <Row>
                    <Col className={styles.searchInput}>
                        <InputGroup>
                            <FormControl
                                placeholder="User name"
                                aria-label="User name"
                                aria-describedby="basic-addon2"
                                onChange={e => setUserfilter(e.target.value)}
                            />
                            <InputGroup.Text id="basic-addon2"><Search/></InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    {userss.filter(item => item.name.toLowerCase().includes(userfilter.toLowerCase())).length === 0 ?
                        <h1 className='text-center'>There is no user with this name</h1> :
                        userss.filter(item => item.name.toLowerCase().includes(userfilter.toLowerCase()))
                            .map(item => (
                                <Col className='mt-3' key={item.id} xs={12} sm={6} md={4} lg={3}>
                                    <Link to={`/${item.id}`}>
                                        <ProfileCard name={item.name}
                                                  description={item.email}
                                                  image={'https://i.pravatar.cc/150?img=' + item.id}/>
                                    </Link>
                                </Col>))}
                </Row>
            </Container>
        </div>
    )
}

export default UserList