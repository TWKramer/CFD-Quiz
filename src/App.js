import "./App.css";
import { useState } from 'react'; //8k (gzipped: 3.3k) ???? need this?

function App() {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [country, setCountry] = useState("");
    const [position, setPosition] = useState("");
    const [wage, setWage] = useState(0);


    const displayInfo = () =>{
        console.log(name + age + country + position + wage);
    };
    return (
    <div className="App">
        <div className="information">
        <label>Name:</label>
        <input type="text" onChange={(event) => {setName(event.target.value)}} />
        <label>Age:</label>
        <input type="number" onChange={(event) => {setAge(event.target.value)}}/>
        <label>Country:</label>
        <input type="text" onChange={(event) => {setCountry(event.target.value)}}/>
        <label>Position:</label>
        <input type="text" onChange={(event) => {setPosition(event.target.value)}}/>
        <label>Wage (year):</label>
        <input type="nuumber" onChange={(event) => {setWage(event.target.value)}}/>
        <button onClick={displayInfo}>Add Employee</button>
        </div>
    </div>
    );
}

export default App;