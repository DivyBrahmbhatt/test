"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export function HeaderComponent() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push("/");
  };
  
  const [basket, setBasket] = useState<{ items: { quantity: number }[] }>({
    items: [],
  });
  const [user, setUser] = useState(null);

  useEffect(() => {
    const basketData = JSON.parse(
      localStorage.getItem("basket") || '{"items":[]}'
    );
    const userData = JSON.parse(localStorage.getItem("user") || "null");
    setBasket(basketData);
    setUser(userData);
  }, []);

  


  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          SPORTIFY
        </Link>

        <div className="flex items-center space-x-4">
          {/* Basket Icon */}
          <Link href="/basket">
            <Button variant="ghost" size="icon">
            
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping Cart</span>
            </Button>
          </Link>

          {/* User Menu */}
          
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <User className="h-5 w-5" />
                  <span className="sr-only">User Account</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <button onClick={handleSignOut}>Logout</button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
      
        </div>
      </div>
    </header>
  );
}
