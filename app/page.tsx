"use client";

import Link from "next/link";

function HomePage() {
  const colors = {
    main: "#EB9FEF",
    secondary: "#545677",
    pinkLace: "#FECEE9",
  };

  // bg-gradient-to-r from-cyan-500 to-blue-500

  return (
    <div>
      <div
        className={`flex w-screen h-screen bg-gradient-to-r from-[#545677] to-[#FECEE9] absolute`}
      >
        <span>
          <h1></h1>
        </span>
        <div className="grid h-screen w-screen place-items-center">
          <span className="mainPage">
            <h1 className="select-none mainPageHeading">
              The #1 Fictional School Managing Software
            </h1>
            <Link href="/login" type="button" className="mainPageLogin bouncy">
              Login
            </Link>

            <Link
              href="/register"
              type="button"
              className="mainPageSignUp bouncy"
            >
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
