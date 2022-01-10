import {Card, ProgressBar} from "react-bootstrap";

export default function ProgressCard({percent}){

    return(
        <>
            <Card style={{border:'2px solid gray',borderRadius:'15px',width:'20%'}}>
                <Card.Body>
                    <Card.Text>salam</Card.Text>
                    <Card.Title>salam</Card.Title>
                    <ProgressBar now={{percent}} style={{height:'3px'}}/>
                </Card.Body>
            </Card>
        </>
    )
}