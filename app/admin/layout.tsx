import React from "react";
import { redirect } from "next/navigation";
import { unstable_getServerSession } from "next-auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await unstable_getServerSession();
  if (!session || session.user?.name !== "admin") {
    redirect("/");
  }
  return <div>{children}</div>;
}
