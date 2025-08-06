import React, { useRef } from "react";

const UncontrolledForms = () => {

  let emailRef= useRef(" ")
  let passwordRef= useRef(" ")
const handleSubit=(e)=>{
e.preventDeffault();
let user={
  email: emailRef.current.value,
  pasword: passwordRef.current.value,
}
console.log(user)
}

  return (
    <div>
      <h1>UncontrolledForms</h1>
      <form onSubmit={handleSubit}>
        <input type="text" placeholder="Email" ref={emailRef} />
        <br/>
        <br/>
        <input type="text" placeholder="Password" ref={passwordRef}/>
      </form>
      <br/><br/>
      <button>Submit</button>
    </div>
  );
};

export default UncontrolledForms;
