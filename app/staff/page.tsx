"use client";

import staff from "../../db/staff.json";
import logins from "../../db/logins.json";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { destroyCookie, parseCookies } from "nookies";

function StaffPage() {
  const router = useRouter();

  let staffInfo: any;
  for (var st of staff) {
    let sId = (st as any).id;
    if (sId === parseCookies().staffId) {
      staffInfo = st;
    }
  }

  for (var lg of logins) {
    if (lg[0] === parseCookies().staffId) { 
      if (lg[1] === parseCookies().loginKey) {
        return (
        <div className="grid h-screen justify-center">
          <h1 className="bg-gray-200 w-fit h-fit p-3 rounded">{staffInfo?.lName}, {staffInfo?.fName}</h1>
          <Link href={"/generate"} className="generateReportButton shadow-lg hover:bg-purple-400 hover:shadow-xl"><h1 className="text-2xl p-3">Generate Report</h1></Link>
          <button onClick={() => {
            destroyCookie(null, "loginKey");
            destroyCookie(null, "staffId");
            router.push("/");
          }} className="bg-gray-200 w-fit h-fit p-3 rounded shadow hover:bg-gray-300 hover:shadow-xl ">Log Out</button>
        </div>
      );
      }
    }
  }
  
  router.push("/login/student");
  return <></>;
}

export default StaffPage;
