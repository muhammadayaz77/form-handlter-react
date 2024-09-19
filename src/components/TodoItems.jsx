import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import Wellcome from "./Wellcome";

let TodoItems = () => {
    let todoItems = useSelector(store => store.todo)
    return(
        <>
        {todoItems.length === 0 ? <Wellcome /> : 
    todoItems.map((items) => 
        <TodoItem items={items}/>
    )
        }
        </>
    )
}

export default TodoItems;