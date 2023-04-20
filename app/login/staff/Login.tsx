"use client";

import React, { useEffect, useState } from "react";
import staff from "../../../db/staff.json";
import logins from "../../../db/logins.json";
import { useRouter } from "next/navigation";
import { parseCookies, setCookie, destroyCookie } from "nookies";

function Login() {
  const router = useRouter();

  let loginKey = "";
  let staffId: string;

  const handleSubmit = (event: any) => {
    event.preventDefault();
    for (var st of staff) {
      if (pass === st.password) {
        for (var lg of logins) {
          if (st.id === lg[0]) {
            loginKey = lg[1];
            staffId = lg[0];
          }
        }
      }
    }

    // let msg: string =
    //   pass === confirm
    //     ? `Account created with password: ${pass} and email: ${email}`
    //     : `Passwords do not match. Please try again.`;
    // alert(msg);
    console.log(loginKey);
    setCookie(null, 'loginKey', loginKey);
    setCookie(null, 'staffId', staffId);
    router.push("/staff");
  };

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  return (
    <div className="select-auto w-screen h-screen">
      <form
        action="/send-data-here"
        method="post"
        onSubmit={handleSubmit}
        className="grid h-screen place-items-center"
      >
        <h1>Staff Login</h1>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col border-dotted hover:border-solid border-2 border-gray-200 w-fit rounded-lg p-3">
            <label htmlFor="email" className="text-gray-700">
              Enter Email:
            </label>
            <input
              value={email}
              type="email"
              placeholder="youremail@email.com"
              id="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="border-solid border-2 border-gray-100 rounded text-lg p-2 pl-3 pr-3"
              required
            />
          </div>
          <div className="flex flex-col border-dotted hover:border-solid border-2 border-gray-200 w-fit rounded-lg p-3">
            <label htmlFor="password" className="text-gray-700">
              Enter Password:
            </label>
            <input
              value={pass}
              type="password"
              placeholder="******"
              id="password"
              name="password"
              onChange={(e) => setPass(e.target.value)}
              className="border-solid border-2 border-gray-100 rounded text-lg p-2 pl-3 pr-3"
              required
            />
          </div>
          <button
            type="submit"
            className="self-start border-solid border-2 border-gray-400 bg-gray-200 hover:bg-gray-300 p-2 hover:shadow rounded"
          >
            <h2>Login</h2>
          </button>
          <button onClick={() => {
            router.push("/login/student");
          }}>Student? Sign in here.</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
