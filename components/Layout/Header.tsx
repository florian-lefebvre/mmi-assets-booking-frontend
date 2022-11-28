import Link from "next/link";
import { getSession } from "next-auth/react";
import SignOutButton from "../Auth/SignOutButton";
import { useQuery } from "@tanstack/react-query";

export default function Header() {
  const query = useQuery({ queryKey: ["session"], queryFn: () => getSession });
  return (
    <header className="bg-neutral-500 text-neutral-900">
      <div className="max-w-7xl flex items-center p-4 justify-between mx-auto">
        <Link href="/" className="font-bold text-white text-2xl">
          MMI ASSETS BOOKING
        </Link>
        <div className="flex items-center gap-4">
          <pre>{JSON.stringify(query, null, 2)}</pre>
          <SignOutButton />
        </div>
      </div>
    </header>
  );
}
