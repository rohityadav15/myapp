import React, { useState } from "react";

const ControlledForms2 = () => {
  const [signupUser, setSignupUser] = useState({
    userName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    let { name, value } = e.target;
    setSignupUser({...signupUser, [name]: value });
  };
  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log(signupUser)
  }
  return (
    <div>
      <h1>Controlled Forms 2</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="User name"
          name="userName"
          id="userName"
          value={signupUser.userName}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          value={signupUser.email}
          onChange={handleChange}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          value={signupUser.password}
          onChange={handleChange}
        />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default ControlledForms2;
