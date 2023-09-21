import React, { useRef, useState } from "react";
import { checkVaildData } from "../utils/validate";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate the form data

    // console.log(email.current.value)
    // console.log(password.current.value)

    const message = checkVaildData(email.current.value, password.current.value);
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <form
        className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-75"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl p-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-900"
            type="text"
            placeholder="Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-900"
          type="text"
          placeholder="Email Address"
          ref={email}
        />
        <input
          className="p-4 my-4 w-full bg-gray-900"
          type="password"
          placeholder="Password"
          ref={password}
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="p-4 my-4 bg-red-600 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="cursor-pointer py-4" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New To Netflix? Sign Up Now"
            : "Already a user, Sign In"}
        </p>
      </form>
    </div>
  );
};

export default Login;
