import { Geist, Geist_Mono } from "next/font/google";
import { cn } from "@/lib/utils";
import { Mocking } from "@/components/mocking";
import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Mockingbird</title>
      </Head>
      <div className="min-h-screen flex flex-col justify-between items-center p-8">
        <main className="flex flex-col gap-[32px] items-center sm:items-start">
          <h1
            className={cn("text-5xl font-bold font-mono", geistMono.className)}
          >
            <span role="img" aria-label="bird">
              🦜
            </span>
            Mockingbird
          </h1>
          <Mocking />
        </main>
        <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
          <span className={cn(geistSans.className, "text-sm")}>
            Made with ❤️ by
            <a
              className="pl-0.5 underline font-semibold tracking-tighter"
              href="https://github.com/guillermo-rebolledo"
            >
              memo
            </a>
          </span>
        </footer>
      </div>
    </>
  );
}
