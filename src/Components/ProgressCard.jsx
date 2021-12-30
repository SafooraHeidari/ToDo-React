import {Card, ProgressBar} from "react-bootstrap";

export default function ProgressCard(){
    return(
            <Card style={{border:'2px solid gray',borderRadius:'15px',width:'20%'}}>
                <Card.Body>
                    <Card.Text>salam</Card.Text>
                    <Card.Title>salam</Card.Title>
                    <ProgressBar now={60} style={{height:'3px'}}/>
                </Card.Body>
            </Card>
    )
}