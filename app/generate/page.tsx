"use client";

import students from "../../db/students.json";

export default function Home() {
  var sts: any = new Array(...students);
  var sortsActive = true;
  var sortValue = 0;
  for (var i = 0; i < sts.length; i++) {
    sts[i].points = 0;
    console.log(sts[i].sports.length);
    for (var j = 0; j < sts[i].sports.length; j++) {
      sts[i].points += 5;
    }
  }
  for (var i = 0; i < sts.length; i++) {
    for (var j = 0; j < sts[i].clubs.length; j++) {
      sts[i].points += 3;
    }
  }
  if(sortsActive){
    for(var i=0;i<sts.length-1;i++){
      for(var j=0; j<sts.length - 1; j++){
      if(sts[i].points < sts[j+1].points){
        sortValue=sts[j+1];
        sts[j+1]=sts[i];
        sts[i]=sortValue;
      }
    }
  }
  }
  console.log(sts);
  return (
    <div className="grid h-screen justify-center">
      <div
        className={`flex w-screen h-screen bg-gradient-to-r from-[#545677] to-[#FECEE9] absolute`}
      >
        <div className="grid h-screen w-screen place-items-center">
        <div className="flex flex-col w-fit border-dotted border-3 border-gray-200">
          <div className="">
            <h1 className="text-3xl m-4 text-bold text-gray-100 ">End of Semester Report</h1>
          </div>
          <div className="flex flex-col">{sts.map((st: any, i: any) => <h1 key={i} className="rounded w-fit bg-gray-200 m-3 text-xl p-2">{i + 1}. {st.lName}, {st.fName} - Grade: {st.grade} - Points: {st.points}</h1>)}</div>
      </div>
      </div>
      </div>
    </div>
  );
}