import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  return (
    <header className="container mx-auto px-4 py-6">
      <nav className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SPORTIFY
        </Link>
        <div className="space-x-6">
          <button
            onClick={() => signIn("google")}
            className="text-sm font-medium hover:underline"
          >
            Shop
          </button>
          <Link href="#" className="text-sm font-medium hover:underline">
            About
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
}
