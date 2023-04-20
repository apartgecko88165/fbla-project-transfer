import Link from "next/link";
import { redirect } from "next/navigation";

function LoginPage() {
  redirect("/login/student");
  return <></>;
}

export default LoginPage;
