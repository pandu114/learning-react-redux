import React from "react";

const Counter = (props:any) => {
    console.log(props);
  return (
    <div>
      <p>Counter Value - {props.counter}</p>
      <p>Age Value - {props.age}</p>
      <div>
        <button onClick={()=>props.increment()}>Increment</button>
        <button onClick={()=>props.decrement()}>Decrement</button>
        <button onClick={()=>props.reset()}>Reset</button>

        <button onClick={()=>props.updateAge(10)}>Upadte Age</button>
      </div>
    </div>
  );
};

export default Counter;
