import React, { useState } from "react";

function Exam() {
  const [active, setActive] = useState("price");
  const [textActive, setText] = useState("positiv")
  const [value, setValue] = useState("")
  

  let list = ["price", "name", "relevance"];
  const text = ["positiv", "negative", "neutral"];

  function handleSubmit(){
    switch (value) {
      case '1':setText(text[0]);break;
      case '2':setText(text[1]);break;
      case '3':setText(text[2]);break;
      default:alert('Kechirasiz, Bunday raqamda Kontent mavjud emas!');break;
    }

  }

  return (
    <div className="display">
      <div className="block">
        {list.map((item) => (
          <button
            className={active === item ? "active" : "buttons__btn"}
            onClick={() => setActive(item)}
            key={item}
          >
            sort by {item}
          </button>
        ))}
      </div>
{/* 
        Second Exam
*/}


      <div className="task">
        <div className="input">
          <input type="text" onChange={(e)=>setValue(e.target.value)}/>
          <button onClick={()=>handleSubmit()}>Change Tab</button>
        </div>
        <div className="context">
          {
          text.map(item => (
            <button key={item} className={textActive === item ? 'textactive' : ''} onClick={()=> setText(item) }>{item}</button>
          ))
          }
        </div>
        <div className="content">
          <p>{textActive.toUpperCase()} CONTENT</p>
        </div>
      </div>
    </div>
  );
}

export default Exam;
