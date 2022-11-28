import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <div>Home</div>
      <Link href="/products">Go to products</Link>
      <Link href="/admin">Go to admin</Link>
    </div>
  );
}
