import ids from "../../../../../db/ids.json";
import students from "../../../../../db/students.json";
import logins from "../../../../../db/logins.json";
import * as fs from "fs";
import { redirect } from "next/navigation";
import makeId from "../../../../(misc)/makeId";

function logId(userInfo: {
  id: string;
  email: string;
  fName: string;
  lName: string;
  password: string;
  points: number;
  grade: number;
  sports: [string];
  clubs: [string];
}): boolean {
  // @ts-ignore
  let uId = userInfo.id;
  if (ids.includes(uId as never)) {
    return false;
  }
  fs.writeFile(
    "/home/finnbowman/Desktop/projects/fbla/fbla-project-final/FBLA/db/ids.json",
    JSON.stringify([...ids, userInfo.id]),
    (err) => {}
  );
  fs.writeFile(
    "/home/finnbowman/Desktop/projects/fbla/fbla-project-final/FBLA/db/students.json",
    JSON.stringify([...students, userInfo]),
    (err) => {}
  );
  fs.writeFile(
    "/home/finnbowman/Desktop/projects/fbla/fbla-project-final/FBLA/db/logins.json",
    JSON.stringify([...logins, [userInfo.id, makeId(64)]]),
    (err) => {}
  );
  return true;
}


export default function makeIdPage({ params }: { params: { info: any } }) {
  let data: any = JSON.parse(decodeURIComponent(params.info));
  let valid = logId(data);
  if (!valid) {
    redirect("/register/student");
  }
  return (
    <div>
      <div className="grid h-screen place-items-center">
        <h1 className="bg-gray-300 p-2 border border-purple-400">
          Your student ID is {data.id}
        </h1>
      </div>
    </div>
  );
}
