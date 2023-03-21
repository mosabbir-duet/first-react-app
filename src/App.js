import './App.css';


function App() {
  return (
    <div className="App">
      {/* Add Component  */}
      <h1>Add Simple Component <code>Similar in look and data</code></h1>
      <Person name = "Mosabbir Hossain" email = "abc@gmail.com"></Person>
      <Person name = "Masud Rana" email = "xyz@gmail.com"></Person>
      <Person name = "Tareq Rahman" email = "pqr@gmail.com"></Person>
      <Person name = "Shabuz" email = "tyu@gmail.com"></Person>
      <h2 style={{fontSize : "2.5rem", borderBottom: '3px solid co', paddingBottom: '5px', fontWeight: 'bold'}}>Component of Friends</h2>
      {/* <Friend name = "Mosabbir Hossain" number = '0' ></Friend> */}
      <Friend name = "Masud Rana" number = '4' gfName = {["halima","galima","jalima","nilima"]}></Friend>
      <Friend name = "Tareq" number = '3' gfName = {["sadia","kadia","madia"]}></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person-info'>
      <h1>{props.name}</h1>
      <p>{props.email}</p>
    </div>
  )
}

function Friend(props) {
  console.log(props)
  return (
    <div style={{backgroundColor: 'coral',
      color: 'white',
      border: '3px solid blue',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px'
      }}>
      <h1>{props.name} has {props.number !== '0'? props.number: "No"} girlfriends.</h1>
      <p>Name: {props.gfName.length !== 0? props.gfName.map(name => {
          return (name);
          
        }).join(", ") : "Single"}</p> <br />
    </div>
  )
}

export default App;
