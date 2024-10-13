"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Trash2, Plus, Minus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BasketItem } from "@/app/api/models/basket";
import { HeaderComponent } from "@/components/header";

const basket = () => {
  const [basket, setBasket] = useState<BasketItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBasket = () => {
      const storedBasket = localStorage.getItem("basket");
      if (storedBasket) {
        try {
          const parsedBasket = JSON.parse(storedBasket);
          console.log(parsedBasket);
          setBasket(parsedBasket.items);
        } catch (error) {
          console.error("Error parsing basket data:", error);
        }
      }

      setLoading(false);
    };

    loadBasket();
  }, []);

  const updateBasket = (updatedBasket: BasketItem[]) => {
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  };

  const addItem = (itemId: number) => {
    const updatedBasket = basket.map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateBasket(updatedBasket);
  };

  const removeItem = (itemId: number) => {
    const updatedBasket = basket
      .map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity - 1) }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateBasket(updatedBasket);
  };

  const deleteItem = (itemId: number) => {
    const updatedBasket = basket.filter((item) => item.id !== itemId);
    updateBasket(updatedBasket);
  };

  const subtotal = Array.isArray(basket)
    ? basket.reduce((sum, item) => sum + item.price * item.quantity, 0)
    : 0;

  if (loading) {
    return <div className="container mx-auto mt-8 text-center">Loading...</div>;
  }

  if (!basket || basket.length === 0) {
    return (
      <div className="container mx-auto mt-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Your basket is empty</h1>
        <Link href="/store">
          <Button>Return to store</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeaderComponent />
      <div className="container mx-auto mt-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">Your Basket</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Product</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Subtotal</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.isArray(basket) &&
                  basket.map(function (item) {
                    // Changed from forEach to map

                    return (
                      <TableRow key={item.id}>
                        <TableCell>
                          <div className="flex items-center space-x-4">
                            <Image
                              src={item.pictureUrl}
                              alt={item.name}
                              width={64}
                              height={64}
                              className="rounded-md"
                            />
                            <div>
                              <div className="font-bold">{item.name}</div>
                              <div className="text-sm text-muted-foreground">
                                {item.productBrand} - {item.productType}
                              </div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>Rs {item.price.toFixed(2)}</TableCell>
                        <TableCell>
                          <div className="flex items-center space-x-2">
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => removeItem(item.id)}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => {
                                const newQuantity = parseInt(e.target.value);
                                if (!isNaN(newQuantity) && newQuantity >= 0) {
                                  const updatedBasket = basket
                                    .map((basketItem) =>
                                      basketItem.id === item.id
                                        ? {
                                            ...basketItem,
                                            quantity: newQuantity,
                                          }
                                        : basketItem
                                    )
                                    .filter(
                                      (basketItem) => basketItem.quantity > 0
                                    );
                                  updateBasket(updatedBasket);
                                }
                              }}
                              className="w-16 text-center"
                            />
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => addItem(item.id)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                        <TableCell>
                          Rs {(item.price * item.quantity).toFixed(2)}
                        </TableCell>
                        <TableCell>
                          <Button
                            size="icon"
                            variant="ghost"
                            onClick={() => deleteItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <div className="text-xl font-bold">
              Subtotal: Rs {subtotal.toFixed(2)}
            </div>
            <Button size="lg">Checkout</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default basket;
