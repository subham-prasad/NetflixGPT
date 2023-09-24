import React, { useRef, useState } from "react";
import { checkVaildData } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleButtonClick = () => {
    //Validate the form data

    // console.log(email.current.value)
    // console.log(password.current.value)

    const message = checkVaildData(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message) return;

    //Sign Up /
    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://avatars.githubusercontent.com/u/68709992?v=4",
          })
            .then(() => {
              // Profile updated!
              const { email, displayName, uid, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse")
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user)
          // navigate("/browse")
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <img
        className="absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f85718e8-fc6d-4954-bca0-f5eaf78e0842/ea44b42b-ba19-4f35-ad27-45090e34a897/IN-en-20230918-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
        alt="page Background"
      />
      <Header />
      <form
        className="absolute w-3/12 bg-black p-12 my-36 mx-auto right-0 left-0 rounded-lg text-white bg-opacity-75"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl p-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-900"
            type="text"
            placeholder="Name"
            ref={name}
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
