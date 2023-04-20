"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import students from "../../../db/students.json";
import logins from "../../../db/logins.json";
import { parseCookies, setCookie, destroyCookie } from 'nookies'

export default function SportsPage() {
  const router = useRouter();
  const [isChecked1, setIsChecked1] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  var cookies = parseCookies();

  let studentInfo: any;
  for (var st of students) {
    let sId = (st as any).id;
    if (sId === parseCookies().studentId) {
      studentInfo = st;
    }
  }

  for (var lg of logins) {
    if (lg[0] === parseCookies().studentId) { 
      if (lg[1] === parseCookies().loginKey) {
        return (
          <div className="flex w-screen justify-center text-2xl m-5">
            <div className="flex-col">
              <span className="flex flex-row bg-gray-200 rounded-lg p-1 pr-5 pl-5 m-5">
                <input type="checkbox"
                  onChange={() => setIsChecked1((ch) => !ch)}
                />
                <h2 className="m-5">FBLA</h2>
              </span>
              <span className="flex flex-row bg-gray-200 rounded-lg p-1 pr-5 pl-5 m-5">
                <input type="checkbox"
                  onChange={() => setIsChecked2((ch) => !ch)}
                />
                <h2 className="m-5">SciOly</h2>
              </span>
              <span className="flex flex-row bg-gray-200 rounded-lg p-1 pr-5 pl-5 m-5">
                <input type="checkbox"
                  onChange={() => setIsChecked3((ch) => !ch)}
                />
                <h2 className="m-5">Chess</h2>
              </span>
              <span className="flex flex-row bg-gray-200 rounded-lg p-1 pr-5 pl-5 m-5">
                <input type="checkbox"
                  onChange={() => setIsChecked4((ch) => !ch)}
                />
                <h2 className="m-5">Yearbook</h2>
              </span>
              <span className="flex flex-row bg-gray-200 rounded-lg p-1 pr-5 pl-5 m-5">
              <input type="checkbox"
                  onChange={() => setIsChecked5((ch) => !ch)}
                />
                <h2 className="m-5">Computer Science</h2>
              </span>
              <span className="flex flex-row bg-gray-200 rounded-lg p-1 pr-5 pl-5 m-5">
              <input type="checkbox"
                  onChange={() => setIsChecked6((ch) => !ch)}
                />
                <h2 className="m-5">Debate</h2>
              </span>
              <button onClick={() => {
                let clubs = [];
                if (isChecked1) {
                  clubs.push("FBLA");
                }
                if (isChecked2) {
                  clubs.push("SciOly");
                }
                if (isChecked3) {
                  clubs.push("Chess");
                }
                if (isChecked4) {
                  clubs.push("Yearbook");
                }
                if (isChecked5) {
                  clubs.push("CompSci");
                }
                if (isChecked6) {
                  clubs.push("Debate");
                }

                router.push(`/student/clubs/add/${JSON.stringify({ clubs: clubs, id: cookies.studentId})}`)
              }}
              className="bg-gray-200 p-3 ml-10 rounded-lg hover:bg-gray-300">Save choices</button>
            </div>
          </div>
        );
      }
    }
  }
  router.push("/login/student");
  return <></>;
}