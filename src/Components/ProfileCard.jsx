import {Card, Image} from "react-bootstrap";
import styles from "./ProfileCard.style.module.css"
import {Envelope, Person} from "react-bootstrap-icons";

export default function ProfileCard({name, image, description}) {
    return(
        <>
            <Card className={styles.profileCard}>
                <Image className={styles.profileCardImage} src={image} roundedCircle />
                <Card.Body>
                    <Card.Text className={styles.profileCardText}><Person style={{marginRight:'5px'}}/>{name}</Card.Text>
                    <Card.Title className={styles.profileCardTextSmall}><Envelope style={{marginRight:'5px'}}/>{description}</Card.Title>
                </Card.Body>
            </Card>
        </>
    )
}