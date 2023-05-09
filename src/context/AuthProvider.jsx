import axios from "axios";
import {getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { WEB_URL } from "../lib/CONSTANTS";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    loggedIn: false,
  });

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  async function postLogin(user) {
    const body = {
      username: user.username,
      name : user.displayname,
      img: user.photoURL,
      email : user.email,
      password: user.password
      // self.username = username
      // self.email = email
      // self.password = generate_password_hash(password)
      // self.img = img
    };

    const headers = {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    };

    const res = await axios.post(WEB_URL + "/api/users", body, headers);
    console.log("After sign in: ", user);
    console.log(res);
  }

  async function login() {
    toast.loading("Signing in.....", { id: "signin" });
    signInWithPopup(auth, provider)
      .then(({ user }) => {
        postLogin(user);
        toast.remove("signin");
        toast.success("You're now Singed in!");
      })
      .catch((err) => {
        toast.error("Oops! Failed to sign in.");
      });
  }

  async function logout() {
    const signoutPromise = signOut(auth);
    toast.promise(signoutPromise, {
      loading: "Signing out....",
      success: "You're now signed out, hope to see you soon!",
      error: "Failed to sign out...",
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (userInfo) => {
      if (userInfo) {
        setUser({
          username: userInfo.username,
          photoURL: userInfo.photoURL,
          loggedIn: true,
        });
      } else {
        setUser({
          loggedIn: false,
        });
      }
    });
  });

  const value = {
    // Register,
    login,
    logout,
    user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};