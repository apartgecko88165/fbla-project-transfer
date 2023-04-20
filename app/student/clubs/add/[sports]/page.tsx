import * as fs from "fs";
import students from "../../../../../db/students.json";
import logins from "../../../../../db/logins.json";
import { redirect } from "next/navigation";
import student from "../../../../(misc)/student";

function removeItem(arr: any, value: any) {
  var index = arr.indexOf(value);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

function findPerson(data: any) {
  let studentInfo = students[0];
  for (var st of students) {
    console.log("found2")
    console.log(st.id);
    console.log(data.id);
    console.log(data.id === st.id)
    if (st.id === data.id) {
      console.log("found2")
      studentInfo = st;
      console.log(studentInfo);
      return studentInfo;
    }
  }
}


export default function SportsAddPage({ params }: { params: { sports: string } }) {
  console.log(params);
  var data: any = JSON.parse(decodeURIComponent(params.sports));
  console.log(data.clubs);
  var clubs = data.clubs;
  let studentInfo = findPerson(data) as any;
  
  console.log("SI1:" + studentInfo);

  console.log(students);
  let currentStudents = removeItem(students, studentInfo);
  console.log(currentStudents);
  console.log(`SI: ${studentInfo}`);
        // @ts-ignore
        try {
          studentInfo["clubs"] = clubs;
        } catch {
          redirect("/student");
        }
        fs.writeFile(
          "/home/finnbowman/Desktop/projects/fbla/fbla-project-final/FBLA/db/students.json",
          JSON.stringify([...currentStudents, studentInfo]),
          (err) => {}
        );
        redirect("/student");
        return (
          <div>
            Sports added!
          </div>
        );
      }