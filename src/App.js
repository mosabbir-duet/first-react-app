import './App.css';


function App() {
  return (
    <div className="App">
      {/* Add Component  */}
      <h1>Add Simple Component <code>Similar in look and data</code></h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <h2 style={{fontSize : "2.5rem", borderBottom: '3px solid co', paddingBottom: '5px', fontWeight: 'bold'}}>Component of Friends</h2>
      <Friend></Friend>
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person() {
  return (
    <div className='person-info'>
      <h1>Mosabbir Hossain</h1>
      <p>Assistant Programmer</p>
    </div>
  )
}

function Friend() {
  return (
    <div style={{backgroundColor: 'coral',
      color: 'white',
      border: '3px solid blue',
      padding: '20px',
      margin: '10px',
      borderRadius: '10px'
      }}>
      <h1>Tareq Rahman</h1>
      <p>Instructor</p>
    </div>
  )
}

export default App;
