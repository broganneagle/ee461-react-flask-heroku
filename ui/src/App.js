// import logo from './logo.svg';
import React from 'react';
// import Button from '@mui/material/Button';
import Popup from './components/Popup';
import {useState} from "react";
import './App.css';
// import {TextField} from "@mui/material";

function App() {
  const[buttonPopup, setButtonPopup] = useState(false);
  const[buttonOut, setButtonOut] = useState(false);
  const[buttonPopup1, setButtonPopup1] = useState(false);
  const[buttonOut1, setButtonOut1] = useState(false);

  const[buttonPopup2, setButtonPopup2] = useState(false);
  const[buttonOut2, setButtonOut2] = useState(false);
  const[buttonPopup22, setButtonPopup22] = useState(false);
  const[buttonOut22, setButtonOut22] = useState(false);

  const[buttonPopup3, setButtonPopup3] = useState(false);
  const[buttonOut3, setButtonOut3] = useState(false);
  const[buttonPopup33, setButtonPopup33] = useState(false);
  const[buttonOut33, setButtonOut33] = useState(false);

  const[buttonJoin, setButtonJoin] = useState(false);
  const[buttonLeave, setButtonLeave] = useState(false);
  const[buttonJoin2, setButtonJoin2] = useState(false);
  const[buttonLeave2, setButtonLeave2] = useState(false);
  const[buttonJoin3, setButtonJoin3] = useState(false);
  const[buttonLeave3, setButtonLeave3] = useState(false);

  return <div className="App">
    <div className="addProject">
      <h1>Projects</h1>
      <body>
      <p3> HWSet1: 50/100</p3>
      <input method="post"/>
      <button onClick={() => setButtonPopup(true)}>Check In</button>
      <Popup trigger={buttonPopup} setTrigger = {setButtonPopup}>
        <h2>Qty hardware checked in</h2>
        flask
      </Popup>
      <input method="post"/>
      <button onClick={() => setButtonOut(true)}>Check Out</button>
      <Popup trigger={buttonOut} setTrigger = {setButtonOut}>
        <h11>Qty hardware checked out</h11>
      </Popup>
      <br></br>

      <p1>Project Name 1</p1>

      <p2>list, of, authorized, users</p2>
      <button onClick={() => setButtonJoin(true)}>Join</button>
      <Popup trigger={buttonJoin} setTrigger = {setButtonJoin}>
        <h5>Joined Project 1</h5>
      </Popup>
      <button onClick={() => setButtonLeave(true)}>Leave</button>
      <Popup trigger={buttonLeave} setTrigger = {setButtonLeave}>
        <h6>Left Project 1</h6>
      </Popup>

      <br></br>

      <p4>HWSet2: 0/100</p4>
      <input method="post"/>
      <button onClick={() => setButtonPopup1(true)}>Check In</button>
      <Popup trigger={buttonPopup1} setTrigger = {setButtonPopup1}>
        <h12>Qty hardware checked in</h12>
      </Popup>
      <input method="post"/>
      <button onClick={() => setButtonOut1(true)}>Check Out</button>
      <Popup trigger={buttonOut1} setTrigger = {setButtonOut1}>
        <h13>Qty hardware checked out</h13>
      </Popup>


      </body>

      <body>
      <br></br>
      <br></br>
      <p3> HWSet1: 50/100</p3>
      <input method="post"/>
      <button onClick={() => setButtonPopup2(true)}>Check In</button>
      <Popup trigger={buttonPopup2} setTrigger = {setButtonPopup2}>
        <h14>Qty hardware checked in</h14>
      </Popup>
      <input method="post"/>
      <button onClick={() => setButtonOut2(true)}>Check Out</button>
      <Popup trigger={buttonOut2} setTrigger = {setButtonOut2}>
        <h15>Qty hardware checked out</h15>
      </Popup>
      <br></br>

      <p1>Project Name 2</p1>

      <p2>list, of, authorized, users</p2>
      <button onClick={() => setButtonJoin2(true)}>Join</button>
      <Popup trigger={buttonJoin2} setTrigger = {setButtonJoin2}>
        <h7>Joined Project 2</h7>
      </Popup>
      <button onClick={() => setButtonLeave2(true)}>Leave</button>
      <Popup trigger={buttonLeave2} setTrigger = {setButtonLeave2}>
        <h8>Left Project 2</h8>
      </Popup>

      <br></br>

      <p4>HWSet2: 0/100</p4>
      <input method="post"/>
      <button onClick={() => setButtonPopup22(true)}>Check In</button>
      <Popup trigger={buttonPopup22} setTrigger = {setButtonPopup22}>
        <h15>Qty hardware checked in</h15>
      </Popup>
      <input method="post"/>
      <button onClick={() => setButtonOut22(true)}>Check Out</button>
      <Popup trigger={buttonOut22} setTrigger = {setButtonOut22}>
        <h16>Qty hardware checked out</h16>
      </Popup>

      </body>

            <body>
      <br></br>
      <br></br>
      <p3> HWSet1: 50/100</p3>
      <input method="post"/>
      <button onClick={() => setButtonPopup3(true)}>Check In</button>
      <Popup trigger={buttonPopup3} setTrigger = {setButtonPopup3}>
        <h17>Qty hardware checked in</h17>
      </Popup>
      <input method="post"/>
      <button onClick={() => setButtonOut3(true)}>Check Out</button>
      <Popup trigger={buttonOut3} setTrigger = {setButtonOut3}>
        <h18>Qty hardware checked out</h18>
      </Popup>
      <br></br>

      <p1>Project Name 3</p1>

      <p2>list, of, authorized, users</p2>
      <button onClick={() => setButtonJoin3(true)}>Join</button>
      <Popup trigger={buttonJoin3} setTrigger = {setButtonJoin3}>
        <h9>Joined Project 3</h9>
      </Popup>
      <button onClick={() => setButtonLeave3(true)}>Leave</button>
      <Popup trigger={buttonLeave3} setTrigger = {setButtonLeave3}>
        <h10>Left Project 3</h10>
      </Popup>


      <br></br>

      <p4>HWSet2: 0/100</p4>
      <input method="post"/>
      <button onClick={() => setButtonPopup33(true)}>Check In</button>
      <Popup trigger={buttonPopup33} setTrigger = {setButtonPopup33}>
        <h19>Qty hardware checked in</h19>
      </Popup>
      <input method="post"/>
      <button onClick={() => setButtonOut33(true)}>Check Out</button>
      <Popup trigger={buttonOut33} setTrigger = {setButtonOut33}>
        <h20>Qty hardware checked out</h20>
      </Popup>
      </body>

    </div>
    <div className="list"></div>
  </div>
}

export default App;
