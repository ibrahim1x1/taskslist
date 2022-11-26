import  {useState}  from "react";
import {Modal,Button,Form} from 'react-bootstrap'
import { useDispatch } from "react-redux";
import { editTas } from "../redux/Action";



export const Edit=({tsk})=>{
    const [show, setShow] = useState(false);
    const [todo,setTodo] = useState("");
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch=useDispatch();

    return(
        <>
        <Button className="Bouton" variant="primary" onClick={handleShow}>
          Edit 
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
        <Modal.Title>Edit</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Edit Task</Form.Label>
        <Form.Control value={todo} onChange={(e)=> setTodo(e.target.value)} type="text" placeholder="Enter task" />
      </Form.Group>      
    </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={()=>{dispatch(editTas({id : tsk.id, description : todo})); handleClose()}}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        </>
    )
}