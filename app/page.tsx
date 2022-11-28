import Link from "next/link";

export default function RootPage() {
  return (
    <div className="">
      <div>Home</div>
      <Link href="/products">Go to products</Link>
    </div>
  );
}
