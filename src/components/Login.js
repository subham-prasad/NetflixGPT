import React, { useState } from "react";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-75">
        <h1 className="text-3xl p-4">{isSignInForm ? "Sign In" : "Sign Out"}</h1>
         {!isSignInForm &&<input
          className="p-4 my-4 w-full bg-gray-900"
          type="text"
          placeholder="Name"
        />}
        <input
          className="p-4 my-4 w-full bg-gray-900"
          type="text"
          placeholder="Email Address"
        />
        <input
          className="p-4 my-4 w-full bg-gray-900"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-4 bg-red-600 w-full rounded-lg" >
        {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer py-4" 
        onClick={toggleSignInForm} >{isSignInForm ? "New To Netflix? Sign Up Now" : "Already a user, Sign In"}</p>
      </form>
    </div>
  );
};

export default Login;
