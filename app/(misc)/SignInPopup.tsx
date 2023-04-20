import Link from "next/link";

function SignInPopup() {
  return (
    <div className="flex flex-col">
      <h1>You need to sign to view this content!</h1>
      <Link href="../login/student">Sign in as a student</Link>
      <Link href="../login/staff">Sign in as a staff member</Link>
    </div>
  );
}

export default SignInPopup;
