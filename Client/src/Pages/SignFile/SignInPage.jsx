import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import "./SignInPage.css";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [btnText, setBtnText] = useState("Log In");
  const [errorMessage, setErrorMessage] = useState("");
  const pswdRef = useRef();
  const navigate = useNavigate();

  // handle functions
  function handleNavigation(path) {
    navigate(path);
  }

  function handleGooglePlay() {
    window.location.href =
      "https://play.google.com/store/apps/details?id=com.instagram.android&hl=en";
  }

  function handleMicrosoftApps() {
    window.location.href =
      "https://apps.microsoft.com/detail/9nblggh5l9xt?hl=en-US&gl=US";
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setBtnText("Loading...");
    setErrorMessage("");

    const userData = {
      username: userName,
      password: pswdRef.current.value,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/login",
        userData
      );

      console.log("Login Response:", response);

      // Save user data to cookies or state
      Cookies.set("user", JSON.stringify(response.data.user), { expires: 7 });

      navigate("/home");
    } catch (err) {
      setErrorMessage(
        err.response?.data?.error || "Something went wrong. Try again."
      );
      console.error("Login Error:", err);
    } finally {
      setBtnText("Log In");
    }
  };

  return (
    <>
      <div className="container">
        <div className="left">
          <div className="backgroundImage"></div>
        </div>
        <div className="right">
          <div className="topRight">
            <div className="hlLogo"></div>
            <form onSubmit={handleFormSubmit}>
              <label htmlFor="userName"></label>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                id="userName"
                name="userName"
                placeholder="username"
              />
              {/* Password */}
              <label htmlFor="password"> </label>
              <input
                ref={pswdRef}
                type="password"
                id="password"
                name="password"
                placeholder="Password"
              />
              <button type="submit">{btnText}</button> {/* Use btnText here */}
              {errorMessage && (
                <div className="errorMessage">{errorMessage}</div>
              )}
              <div className="lineCon">
                <span className="line"></span>
                <span className="p" id="or">
                  OR
                </span>
                <span className="line"></span>
              </div>
            </form>
            <button className="facebookLog">
              <div className="facebookIcon"></div>Log in with Facebook
            </button>
            <p
              className="forgotPassword"
              onClick={() => handleNavigation("/reset")}
            >
              Forgot password?
            </p>
          </div>
          <div className="bottom-right-container">
            <div className="bottom-right">
              <p className="p">
                Don't have an account
                <span
                  className="changePagesButton"
                  onClick={() => handleNavigation("/sign-up")}
                >
                  Sign up
                </span>
              </p>
            </div>
          </div>
          <p className="p"> Get the app.</p>
          <div className="appButtonsCon">
            <button className="googlePlay" onClick={handleGooglePlay}></button>
            <button
              className="microsoft"
              onClick={handleMicrosoftApps}
            ></button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignInPage;
