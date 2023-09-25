import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../utils/userSlice";
import { Logo, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLangugage } from "../utils/configSlice";
const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector(store => store.Gpt.showGPTSearch)
  const dispatch = useDispatch();

  const handleGPTSearchClick = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLangugage(e.target.value));
  };

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        // navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { email, displayName, uid, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);
  return (
    <div className="bg-gradient-to-b from-black w-full flex flex-col z-30 absolute md:flex-row md:justify-between">
      <img className="w-44 mx-auto md:mx-0" src={Logo} alt="Logo" />

      {user && (
        <div className="flex mt-3 mx-auto md:mx-0">
          
            {showGPTSearch && <select className="bg-gray-400 text-black p-2 m-2 rounded-md"
            onChange={handleLanguageChange}>
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
}
          
          <button
            onClick={handleGPTSearchClick}
            className="bg-purple-800 px-4 py-3 mx-2 rounded-lg text-white"
          >
           {showGPTSearch ? "HomePage" : "GPT Search"}
          </button>

          <img className=" hidden w-12 h-12 p-2 md:inline-block" alt="user Icon" src={user?.photoURL} />

          <button
            className="font-bold text-white cursor-pointer"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
