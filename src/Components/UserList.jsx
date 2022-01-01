import {useState, useEffect,useContext} from "react";
import {Link} from "react-router-dom";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";

import ProfileCard from "./ProfileCard";
import {UserContext} from "../root";

const UserList = () => {
    const userList = useContext(UserContext);
    const [userfilter, setUserfilter] = useState('');

    return (
        <div>
            <Container className='mt-3'>
                <Row className='mt-3'>
                    <Col>
                        {console.log(userList)}
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Monster name"
                                aria-label="Monster name"
                                aria-describedby="basic-addon2"
                                onChange={e => setUserfilter(e.target.value)}
                            />
                            <InputGroup.Text id="basic-addon2">Search</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className='mt-3'>
                    {userList.filter(item => item.name.toLowerCase().includes(userfilter.toLowerCase())).length === 0 ?
                        <h1 className='text-center'>There is no monster with this name</h1> :
                        userList.filter(item => item.name.toLowerCase().includes(userfilter.toLowerCase()))
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