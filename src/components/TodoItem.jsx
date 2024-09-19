import { useDispatch } from "react-redux"
import { todoActions } from "../store";


let TodoItem = ({items}) => {
    let dispatch = useDispatch();
    let handleRemoveTodo = (todoName) => {
        dispatch(todoActions.removeTodo(todoName))
    }
    return(
        <>
        <div className="container-fluid mt-3">
        <div className="row">
            <div className="col-4">
                <p>{items.todoName}</p>
            </div>
            <div className="col-4">
                <p>{items.todoDate}</p>
        </div>
        <div className="col-3">
            <button className="btn btn-danger"
            onClick={() => handleRemoveTodo(items.todoName)}
            >Delete</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default TodoItem