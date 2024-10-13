"use client";
import { useSession } from "next-auth/react";
import { LandingPageComponent } from "../components/landing-page"; // Ensure this is a default export or adjust accordingly
import { Provider } from "react-redux";
import { useRouter } from "next/navigation";
import { useEffect } from "react"; // Add this import

export default function Main() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session && session.user) {
      router.push("/store");
    }
  }, [session, router]);

  return (
    <div>
      <LandingPageComponent />
    </div>
  );
}
