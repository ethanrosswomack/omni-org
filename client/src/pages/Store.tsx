import { useQuery } from "@tanstack/react-query";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import type { Product } from "@shared/schema";

export default function Store() {
  const [cart, setCart] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const { data: products = [], isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  const categories = ["All", ...Array.from(new Set(products.map((p) => p.category)))];
  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="min-h-screen bg-background py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Our Store</h1>
          <p className="text-muted-foreground">Browse our curated collection</p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              data-testid={`button-category-${category}`}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Cart Info */}
        <div className="mb-8 p-4 bg-card border rounded-lg flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">Items in cart:</p>
            <p data-testid="text-cart-count" className="text-2xl font-bold">
              {cart.length}
            </p>
          </div>
          <Button data-testid="button-checkout" variant="default">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Checkout
          </Button>
        </div>

        {/* Products Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading products...</p>
          </div>
        ) : filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No products found</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                data-testid={`card-product-${product.id}`}
                className="flex flex-col overflow-hidden hover-elevate"
              >
                {/* Product Image */}
                {product.image && (
                  <div className="w-full h-48 bg-muted overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}

                {/* Product Info */}
                <div className="p-4 flex flex-col flex-1">
                  <h3
                    data-testid={`text-product-name-${product.id}`}
                    className="font-bold text-lg mb-1"
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-2">
                    {product.category}
                  </p>
                  {product.description && (
                    <p className="text-sm text-foreground mb-4 flex-1">
                      {product.description}
                    </p>
                  )}

                  {/* Price and Stock */}
                  <div className="flex items-center justify-between mb-4">
                    <p
                      data-testid={`text-price-${product.id}`}
                      className="text-xl font-bold"
                    >
                      ${product.price}
                    </p>
                    <p
                      data-testid={`text-stock-${product.id}`}
                      className={`text-sm ${
                        (product.stock ?? 0) > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {(product.stock ?? 0) > 0 ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    data-testid={`button-add-to-cart-${product.id}`}
                    onClick={() => addToCart(product)}
                    disabled={(product.stock ?? 0) === 0}
                    className="w-full"
                  >
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
