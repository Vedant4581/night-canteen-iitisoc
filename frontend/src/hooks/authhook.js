import {useCallback, useState, useEffect} from 'react';

let expirationTimer

export const useAuth = () => {
  // Instead of check for isLoggedin we now check if the token exists
  const [token, setToken] = useState(false);
  const [name, setUserId] = useState(null);
  const [email, setEmail] = useState(null);
  const [userid, setUserid] = useState(null);
  const [tokenExpirationDate, setTokenExpirationDate] = useState();

  const Login = useCallback((name, token, email,userid, expirationDate) => {
    // For token expiration, we maintain a token expiration date in our fronted
    // and check for the timer, the below expiration creates a new Date which is
    // 1 hr after the current time
    const tokenExpirationDate =
      expirationDate || new Date(new Date().getTime() + 1000 * 60 * 60);
    setTokenExpirationDate(tokenExpirationDate);
    setToken(token);
    setUserId(name);
    setEmail(email);
    setUserid(userid);
    // To local storage we can only write text or data that can be converted to text
    // Hence we use stringify
    localStorage.setItem(
      "UserData",
      JSON.stringify({
        name: name,
        token,
        email:email,
        userid:userid,
        expiration: tokenExpirationDate.toISOString(),
      })
    );
  }, []);

  const Logout = useCallback(() => {
    setToken(null);
    setTokenExpirationDate(null);
    setUserId(null);
    setEmail(null);
    setUserid(null);
    localStorage.removeItem("UserData");
  }, []);

  useEffect(() => {
    // Checking for Login case
    if (token) {
      const remainingTime =
        tokenExpirationDate.getTime() - new Date().getTime();
      expirationTimer = setTimeout(Logout, remainingTime);
    } else {
      clearTimeout(expirationTimer);
    }
  }, [token, Logout, tokenExpirationDate]);

  // After storing the token in localStorage, we want to check if the
  // token exists in there or not when the component mounts [renders first time]
  useEffect(() => {
    // useEffect runs after the render cycle, when the components fully loads
    // We can add a state to confirm the useEffect has completed its work
    // and meanwhile we can show some other page
    const storedData = JSON.parse(localStorage.getItem("UserData"));
    if (
      storedData &&
      storedData.token &&
      new Date(storedData.expiration) > new Date()
    ) {
      // We are also passing the expiraton date to our login function to check
      // wether there is already a expiration Date, so that we dont always increase
      // the expiration time by 1hr on each render cycle
      Login(
        storedData.name,
        storedData.email,
        storedData.token,
        storedData.userid,
        new Date(storedData.expiration)
      );
    }
  }, [Login]);

  return{
    token,
    Login,
    Logout,
    name,
    email,
    userid
  }
};