"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { signOut, useSession } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import agent from "../api/agent";
import { Product } from "../api/models/product";
import { Brand } from "../api/models/brand";
import { HeaderComponent } from "@/components/header";
import BasketService from "../api/basketService"; // Import the BasketService
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify"; // Import toast and ToastContainer

import "react-toastify/dist/ReactToastify.css"; // Import Toastify CSS

type ProductType = {
  id: number;
  name: string;
};

export default function ProductCatalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [types, setTypes] = useState<ProductType[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 6;

  useEffect(() => {
    async function fetchInitialData() {
      try {
        const fetchedBrands = await agent.Store.brands();
        setBrands(Array.isArray(fetchedBrands) ? fetchedBrands : []);

        const fetchedTypes = await agent.Store.types();
        setTypes(Array.isArray(fetchedTypes) ? fetchedTypes : []);
      } catch (error) {
        console.error("Error fetching initial data:", error);
      }
    }

    fetchInitialData();
  }, []);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let productsData = await agent.Store.list(
          currentPage,
          itemsPerPage,
          selectedBrand !== "all" ? parseInt(selectedBrand) : undefined,
          selectedType !== "all" ? parseInt(selectedType) : undefined
        );

        // If search term is used
        if (searchTerm) {
          productsData = await agent.Store.search(searchTerm);
        }

        const sortedProducts = productsData.content.sort(
          (a: Product, b: Product) => {
            return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
          }
        );

        setProducts(sortedProducts);
      } catch (error) {
        console.error("Error fetching filtered products:", error);
      }
    }

    fetchProducts();
  }, [selectedBrand, selectedType, sortOrder, searchTerm, currentPage]);

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayedProducts = Array.isArray(products)
    ? products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
      )
    : [];

  const handleAddToCart = async (product: Product, quantity: number = 1) => {
    try {
      const basket = await BasketService.addItemToBasket(product, quantity);
      console.log("Basket updated:", basket);
      toast.success(`${product.name} has been added to your cart!`); // Show success toast
    } catch (error) {
      console.error("Failed to add item to basket:", error);
      toast.error("Failed to add item to cart."); // Show error toast
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderComponent />
      <ToastContainer position="top-right" /> {/* Add ToastContainer here */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Our Products</h2>

        <div className="flex flex-col md:flex-row gap-8 mb-8">
          <div className="w-full md:w-1/4 space-y-6">
            <div>
              <Label htmlFor="search">Search</Label>
              <div className="relative">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  id="search"
                  placeholder="Search products..."
                  className="pl-8"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <Label>Brand</Label>
              <RadioGroup
                value={selectedBrand}
                onValueChange={setSelectedBrand}
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all-brands" />
                  <Label htmlFor="all-brands">All Brands</Label>
                </div>
                {brands.map((brand) => (
                  <div key={brand.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={brand.id.toString()}
                      id={`brand-${brand.id}`}
                    />
                    <Label htmlFor={`brand-${brand.id}`}>{brand.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Type</Label>
              <RadioGroup value={selectedType} onValueChange={setSelectedType}>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all-types" />
                  <Label htmlFor="all-types">All Types</Label>
                </div>
                {types.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <RadioGroupItem
                      value={type.id.toString()}
                      id={`type-${type.id}`}
                    />
                    <Label htmlFor={`type-${type.id}`}>{type.name}</Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div>
              <Label>Sort by Price</Label>
              <Select
                value={sortOrder}
                onValueChange={(value: "asc" | "desc") => setSortOrder(value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="asc">Low to High</SelectItem>
                  <SelectItem value="desc">High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedProducts.length > 0 ? (
                displayedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white p-6 rounded-lg shadow-md"
                  >
                    <Image
                      src={product.pictureUrl}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-48 object-cover mb-4 rounded"
                    />
                    <h3 className="text-xl font-semibold mb-2">
                      {product.name}
                    </h3>
                    <h3 className="text-sm mb-1">{product.description}</h3>
                    <p className="text-gray-600 mb-4">
                      Rs {product.price.toFixed(2)}
                    </p>
                    <Button
                      className="w-full"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </Button>
                  </div>
                ))
              ) : (
                <p>No products available.</p>
              )}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                  (page) => (
                    <Button
                      key={page}
                      variant={currentPage === page ? "default" : "outline"}
                      onClick={() => setCurrentPage(page)}
                    >
                      {page}
                    </Button>
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
