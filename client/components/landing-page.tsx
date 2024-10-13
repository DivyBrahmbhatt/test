"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./ui/Navbar";
import ProductList from "./ui/ProductList";
import { signIn } from "next-auth/react";
export function LandingPageComponent() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
                Elevate Your Game
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                Premium sports gear for the modern athlete.
              </p>
              <button
                onClick={() => signIn("google")}
                className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200"
              >
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
            <div className="md:w-1/2">
              <Image
                src="https://i.ytimg.com/vi/a_Q0XlQMa3E/maxresdefault.jpg"
                alt="Featured Product"
                width={600}
                height={600}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              Featured Products
            </h2>
            <ProductList />
          </div>
        </section>

        <section className="container mx-auto px-4 py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Perform?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of athletes who trust our gear for their best
            performance.
          </p>
          <button
            onClick={() => signIn("google")}
            className="inline-flex items-center px-6 py-3 text-lg font-medium text-white bg-black hover:bg-gray-800 transition-colors duration-200"
          >
            Explore Collection <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </section>
      </main>

      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600">
            &copy; 2024 SPORTIFY. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
