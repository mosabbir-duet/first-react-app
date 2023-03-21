import './App.css';
import logo from './logo.svg';

// styleObject for info object
const infoStyle  =  {
  color: "white",
  backgroundColor: "coral",
  padding: "10px",
  textAlign: "left"
}

//info object
const info = {
  firstName: "Md Mosabbir",
  lastName: "Hossain",
  age: 25,
  email:"example@gmail.com"
}

//info object2

const info2 = {
  firstName: "Md Tareq",
  lastName: "Rahman",
  age: 30,
  email:"example@gmail.com"
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>JSX</h1>
        <h2 className = "heading">This is a first react app</h2>

        {/* show information of info object  */}
        <div className="info">
          <p style={infoStyle}>
            Name: {info.firstName} {info.lastName} <br />
            Age: {info.age} <br />
            Email: {info.email}
          </p>

          {/* show information about info2 object  */}
          <p style={{color: '#333', backgroundColor: 'yellow', textAlign: 'left', padding: '10px'}}>
            Name: {info2.firstName} {info2.lastName} <br />
            Age: {info2.age} <br />
            Email: {info2.email}
          </p>
        </div>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
