import React, {useState, useEffect, useRef} from 'react';

function MyComponent(){

  //let [number, setNumber] = useState(0);

  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log("Component Rendered")
  });

  function handleClick1(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "red";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick2(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "red";
    inputRef3.current.style.backgroundColor = "";
  }

  function handleClick3(){
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "red";
  }


  return(
    <div> 
      <button onClick={handleClick1}>
        Click Me
      </button>
      <input ref={inputRef1} />

      <button onClick={handleClick2}>
        Click Me
      </button>
      <input ref={inputRef2} />

      <button onClick={handleClick3}>
        Click Me
      </button>
      <input ref={inputRef3} />
    </div>
  )
}

export default MyComponent