import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function AddButton() {

    return(
        <Link to={`addEdit`} state={{todo: {}}}>
            <Button style={{width:'20%'}} variant="secondary">
                Plus
            </Button>
        </Link>
    )
}
