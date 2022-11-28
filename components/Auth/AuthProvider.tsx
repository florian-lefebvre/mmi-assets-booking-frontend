"use client";

import { SessionProvider, SessionProviderProps } from "next-auth/react";
import React from "react";

type Props = {
  children: React.ReactNode;
  session: SessionProviderProps["session"];
};

export default function App({ children, session }: Props) {
  return <SessionProvider session={session}>{children}</SessionProvider>;
}
