import "./App.css";
import React, { useState } from "react";

function App() {
  const things = [
    { description: "fruits" },
    { description: "cars" },
    { description: "computers" },
  ];

  const [text, settext] = useState(" enter to-do list");
  const [display, setdisplay] = useState(things);
  function onDelete(e){
      e?.target.parentElement.parentElement.remove();
  }
  function onEdit(id){
   const editText= prompt("enter the value to edit");
   const newList=display.map((i)=>{
        if(i.description===id)
        {
          i.description=editText
        }
        return(i);
   })
   setdisplay(newList);

  }

  function onSubmit() {
    setdisplay(display.concat([{description: text}]))
    settext("")
  }

  return (
    <>
    <div className="container">
      <div className="App">
        <h2 className="heading"> PREETI -TO DO LIST APP</h2>
        <input   type="text" value={text}  onChange={(Event) => settext(Event?.target.value)} /><br/>
        <button id="submit" onClick={onSubmit}> New to do list </button>
        {display.map((i) => {
          return (
            <li key={i.description}>
              {i.description}{" "}
              <span>
                <button onClick={()=>{onEdit(i.description)}}>Edit</button>
                <button onClick={onDelete}>Delete</button>
              </span>
            </li>
          );
        })}
        </div>
      
      </div>
    </>
  );
}

export default App;
