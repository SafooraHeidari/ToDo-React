import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function AddButton() {




    return(
        <Button style={{width:'20%'}} variant="secondary">
            <Link to={`addEdit`}>Plus</Link>
        </Button>
    )
}
