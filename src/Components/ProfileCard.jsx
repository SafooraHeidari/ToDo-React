import {Card, Image} from "react-bootstrap";

export default function ProfileCard({name, image, description}) {
    return(
        <>
            <Card style={{border:'2px solid gray',borderRadius:'15px',width:'60%'}}>
                <Image style={{width:'200px'}} src={image} roundedCircle />
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                    <Card.Title>{description}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}