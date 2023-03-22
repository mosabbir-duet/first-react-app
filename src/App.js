import { useEffect, useState } from 'react';
import './App.css';


function App() {
  return (
    <div className="App">

      {/* counter component  */}

      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter>
      
      {/* data fetch component  */}
      <h1>Show User information from Api</h1>
      <ExternalUsers></ExternalUsers>

      {/* Add Component  */}
      {/* <h1>Add Simple Component <code>Similar in look and data</code></h1>
      <Person name = "Mosabbir Hossain" email = "abc@gmail.com"></Person>
      <Person name = "Masud Rana" email = "xyz@gmail.com"></Person>
      <Person name = "Tareq Rahman" email = "pqr@gmail.com"></Person>
      <Person name = "Shabuz" email = "tyu@gmail.com"></Person>
      <h2 style={{fontSize : "2.5rem", borderBottom: '3px solid co', paddingBottom: '5px', fontWeight: 'bold'}}>Component of Friends</h2>
      <Friend name = "Mosabbir Hossain" number = '0' gfName = {[]}></Friend>
      <Friend name = "Masud Rana" number = {4} gfName = {["halima","galima","jalima","nilima"]}></Friend>
      <Friend name = "Tareq" number = {3} gfName = {["sadia","kadia","madia"]}></Friend> */}
    </div>
  );
}

// data fetch from api 
function ExternalUsers() {

  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data)) //setUsers set the users
  } , [])
  return (
    <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)"}}>
      {
        users.map(user => displayUsersInformation(user))
      }
    </div>
  )

}

function displayUsersInformation(props) {
  console.log(props)
  return (
    <div style={{border: "3px solid yellowgreen", borderRadius: "20px", backgroundColor: "coral", margin: "10px", padding: "10px"}}>
        <div>
          <h1>Name: {props.name}</h1>
          <h3>Username: {props.username}</h3>
          <p>Email: {props.email}</p>
          <p>Phone: {props.phone}</p>
          <h3>Address:</h3>
          <p>City: {props.address.city}</p>
          <p>Street: {props.address.street}</p>
          <p>Street: {props.address.street}</p>
          <p>Zipcode: {props.address.zipcode}</p>
        </div>
    </div>
  )
}


function Counter() {

  const [count, setCount] = useState(0);
  const increseCount = () => setCount(count + 1);
  const decreaseCount = () => setCount(count - 1);

  return (
    <div style={{border: "2px solid coral", borderRadius: "8px", margin: "10px 50px"}}>
      <h2>Count: {count}</h2>
      <button onClick={increseCount} className = 'btn-style'>increase</button>
      <button onClick={decreaseCount} className = 'btn-style'>decrease</button>
    </div>
  )
}

// function Person(props) {
//   return (
//     <div className='person-info'>
//       <h1>{props.name}</h1>
//       <p>{props.email}</p>
//     </div>
//   )
// }

// function Friend(props) {
// console.log(props)
//   return (
//     <div style={{backgroundColor: 'coral',
//       color: 'white',
//       border: '3px solid blue',
//       padding: '20px',
//       margin: '10px',
//       borderRadius: '10px'
//       }}>
//       <h1>{props.name} has {props.number !== 0 ? props.number: "No"} girlfriends.</h1>
//       <h3>Name: </h3>
//       {props.gfName.length !== 0 ? props.gfName.map((name) => 
//           <li>{name}</li>
          
//         ):<p>Single</p>
//       }
      
//     </div>
//   )
// }

export default App;
