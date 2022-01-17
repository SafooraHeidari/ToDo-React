import {Link} from "react-router-dom";
import {Button} from "react-bootstrap";

export default function AddButton() {

    return(
        <Link className='position-sticky' to={`addEdit`} state={{todo: {}}}>
            <Button variant="secondary">
                Click me to add to do!
            </Button>
        </Link>
    )
}
