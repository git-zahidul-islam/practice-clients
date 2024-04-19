import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [user,setUser] = useState([])

  useEffect(()=>{
    fetch('http://localhost:5000/users')
    .then(res => res.json())
    .then(data => setUser(data))
  },[])

  // form data fetch and post
  const handleFormData = (e) =>{
    e.preventDefault()
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value
    const users = {name,email} 
    console.log(users);
    // post data in server and fetch
    fetch('http://localhost:5000/users',{
      method: "POST",
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(users)
    })
    .then(res => res.json())
    .then(data => {
      console.log("the data is",data);
      const newUsers = [...user,data]
      setUser(newUsers)
      form.reset()
    })
  }

  return (
    <>
      <h1>Practice clients</h1>
      <p>data length: {user.length}</p>
      <form onSubmit={handleFormData}>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add data" />
      </form>
      {
        user.map(data => <p key={data.id}>{data.id}. name{data.name} and email : {data.email}</p>)
      }
    </>
  )
}

export default App
