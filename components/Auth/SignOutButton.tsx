import { signOut } from "next-auth/react";

export default function SignOutButton() {
  return (
    <button
      className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
      onClick={() => signOut()}
    >
      Sign out
    </button>
  );
}
