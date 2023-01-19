import React, { useState } from 'react';

function App() {

  const [name, setname] = useState("");
  const [fullname, fullsetname] = useState("");

  const [name3, setname3] = useState("");
  const [fullname3, fullsetname3] = useState("");

  const InputEvent = (event) => {
    // console.log(event.target.value)
    setname(event.target.value)
  }

  const InputEvent2 = (event) => {
    fullsetname(name)
  }

  const InputEvent3 = (event) => {
    // console.log(event.target.value)
    setname3(event.target.value)
  }

  const InputEvent32 = (event) => {
    event.preventDefault();  // event.preventDefault is use when we are use form and butto type submit then doesn't reload page
    fullsetname3(name3)
  }

  return (

    <>

      <div>

        <h1>{name}</h1>
        <h2>{fullname}</h2>
        {/* <input type="text" placeholder="Enter your name" defaultValue="" /> */}
        <input type="text" placeholder="Enter your name" onChange={InputEvent} value={name} />
        <button onClick={InputEvent2} >Click Me</button>

      </div>

      <form onSubmit={InputEvent32}>

        <div>

          <h2>{fullname3}</h2>
          <h2>{name3}</h2>
          {/* <input type="text" placeholder="Enter your name" defaultValue="" /> */}
          <input type="text" placeholder="Enter your name" onChange={InputEvent3} value={name3} />
          <button type="submit" >Click Me</button>

        </div>

      </form>

    </>

  );

}

export default App;

// silently observer and more try it ( practic.e)
