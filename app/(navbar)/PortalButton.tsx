import React from "react";
import Link from "next/link";

function PortalButton({ text, route }: { text: React.ReactNode; route: any }) {
  return (
    <Link href={route}>
      <li className="bg-gray-300 m-3 p-2 rounded shadow hover:shadow-lg hover:rounded-lg self-center text-center text-lg mt-3 select-none animate-slide">
        {text}
      </li>
    </Link>
  );
}

export default PortalButton;
