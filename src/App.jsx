import { useState } from 'react'
import './App.css'
import Validate from './Validate'
function App(){
  let [formError,setFormError] = useState({})
    let [data,setData] = useState({
    name : '',
    email : '',
    password : '',
  })
  let handleChange = (e) => {
      let name = e.target.name;
      let value = e.target.value;
      setData({
        ...data,
        [name] : value
      })
  }
  let handleSubmit = (e) => {
    e.preventDefault();
    setFormError(Validate(data));
  }
    return (
      <form onSubmit={handleSubmit} className='con w-[30%] p-10'>
      {/* <AddTodo></AddTodo>
      <TodoItems></TodoItems> */}
      
<div class="mb-6">
  <label for="success" class="block mb-2 text-sm font-medium">Your name</label>
  <input
  onChange={handleChange}
  name='name'
  type="text" className={` ${formError.name && 'bg-red-50 border-red-500'} border text-sm rounded-lg dark:bg-gray-700  block w-full p-2.5  `} placeholder="Error input" />
  <p class="mt-2 text-sm text-red-500">{formError.name}</p>
</div>
<div class="mb-6">
  <label for="success" class="block mb-2 text-sm font-medium">Your Email</label>
  <input
  onChange={handleChange}
  name='email'
  type="text" className={` ${formError.email && 'bg-red-50 border-red-500'} border text-sm rounded-lg dark:bg-gray-700  block w-full p-2.5  `} placeholder="Error input" />
  <p class="mt-2 text-sm text-red-500">{formError.email}</p>
</div>
<div class="mb-6">
  <label for="success" class="block mb-2 text-sm font-medium">Your Password</label>
  <input
  onChange={handleChange}
  name='password'
  type="text" className={` ${formError.password && 'bg-red-50 border-red-500'} border text-sm rounded-lg dark:bg-gray-700  block w-full p-2.5  `} placeholder="Error input" />
  <p class="mt-2 text-sm text-red-500">{formError.password}</p>
</div>
 <button className='bg-blue-700 text-white w-full mt-3 rounded-xl p-2'>Submit</button>
      </form>
  )
}

export default App
