import { unstable_getServerSession } from "next-auth";
import SignOutButton from "../components/Auth/SignOutButton";
import AuthProvider from "../components/Auth/AuthProvider";
import "./globals.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();

  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <div>HEADER</div>
          <pre>{JSON.stringify(session, null, 2)}</pre>
          <SignOutButton />
        </header>
        <AuthProvider session={session}>{children}</AuthProvider>
      </body>
    </html>
  );
}
