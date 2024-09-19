import {useDispatch} from 'react-redux'
import { todoActions } from '../store';
import { useRef } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyBq4Ft9J_rmCH6zDO3wQBWig8ZH6b9dFxU",
  authDomain: "todo-practice-ee502.firebaseapp.com",
  projectId: "todo-practice-ee502",
  storageBucket: "todo-practice-ee502.appspot.com",
  messagingSenderId: "898651694471",
  appId: "1:898651694471:web:7310cd43b732afcea3df22"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

let AddTodo = () => {
    let nameElement = useRef();
    let dateElement = useRef();
    let dispatch = useDispatch()
    let handleAddTodo = async(todoName,todoDate) => {

        dispatch(todoActions.addTodo({
            todoName,
            todoDate
        }))
        
try {
    const docRef = await addDoc(collection(db, "users"), {
      TodoName : todoName,
      todoDate : todoDate
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
    }
    return(
        <>
        <div className="container-fluid">
        <div className="row">
            <div className="col-4">
                <input
                ref={nameElement}
                type="text" />
            </div>
            <div className="col-4">
            <input
            ref={dateElement}
            type="date" />
        </div>
        <div className="col-3">
            <button className="btn btn-success"
            onClick={() => handleAddTodo(nameElement.current.value,dateElement.current.value)}
            >ADD</button>
        </div>
        </div>
        </div>
        </>
    )
}

export default AddTodo