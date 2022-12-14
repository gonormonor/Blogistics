import React, { useState } from "react";
import { uName, uPassword } from "../auth";
import { useRouter } from "next/router";
const AdminAuthModal = (props) => {
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const router = useRouter();
  
  const onAuthenticateHandler = () => {
    if (username === uName && password === uPassword) {
      console.log("authenticated");
      localStorage.setItem("auth", true);
      router.push("/");
    } else {
      alert("wrong password and username combination");
      localStorage.setItem("auth", false);
      console.log("not authenticated");
    }
  };

  return (
    <>
      <div className="p-5 font-Montserrat overflow-auto">
        <div className="py-3 space-y-3">
          <input
            type="text"
            required={true} 
            className="w-full py-3 ring-white outline-none text-white bg-gray-800 ring-2 rounded-full p-3"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setusername(e.target.value);
            }}
          />
          <input
            type="password"
            required={true}
            className="w-full py-3 ring-white outline-none text-white rounded-full  bg-gray-800 ring-2 p-3"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
          />

          <div
            onClick={() => {
              onAuthenticateHandler();
            }}
            className="px-6 py-3 rounded-full bg-green-500 text-center cursor-pointer text-white"
          >
            Log In
          </div>
        </div>
      </div>
    </>

    // </form>
  );
};

export default AdminAuthModal;
