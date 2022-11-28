import "../styles/globals.css";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Layout/Header";

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
        <div>FOOTER</div>
      </QueryClientProvider>
    </SessionProvider>
  );
}
