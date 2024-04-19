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

  return (
    <>
      <h1>Practice clients</h1>
      <p>data length: {user.length}</p>
      {
        user.map(data => <p key={data.id}>{data.id}. name{data.name} and email : {data.email}</p>)
      }
      <form>
        <input type="text" name="name" id="" /> <br />
        <input type="email" name="email" id="" /> <br />
        <input type="submit" value="Add data" />
      </form>
    </>
  )
}

export default App
