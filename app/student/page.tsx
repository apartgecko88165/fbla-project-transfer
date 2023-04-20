"use client";
import students from "../../db/students.json";
import logins from "../../db/logins.json";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";

function StudentPage({ params }: { params: { id: string }}) {
  const router = useRouter();
  const [sport, setSport] = useState("");
  const [club, setClub] = useState("");
  console.log(parseCookies().studentId);
  console.log(parseCookies().loginKey);

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
        <div className="grid h-screen justify-center">
          <h1 className="bg-gray-200 w-fit h-fit p-3 font-bold border border-purple-200 border-dotted shadow-lg rounded">{studentInfo?.lName}, {studentInfo?.fName}</h1>
          <h1 className="bg-gray-200 w-fit h-fit p-2 rounded shadow">Grade: {studentInfo?.grade}</h1>
          <h2 className="bg-gray-200 w-fit h-fit p-2 rounded shadow">Points: {studentInfo?.points}</h2>
          <Link href={"/student/sports"} className="bg-gray-200 w-fit h-fit p-2 rounded shadow-xl hover:bg-gray-300 border border-solid border-purple-200">Add sports</Link>
          <Link href={"/student/clubs"} className="bg-gray-200 w-fit h-fit p-2 rounded shadow-xl hover:bg-gray-300 border border-solid border-purple-200">Add clubs</Link>
          <button onClick={() => {
            destroyCookie(null, "loginKey");
            destroyCookie(null, 'studentId');
            router.push("/");
          }}>Log Out</button>
        </div>
      );
      }
    }
  }
  
  router.push("/login/student");
  return <></>;
}

export default StudentPage;
