import { useEffect, useState } from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { fetchProducts } from '@/lib/shopify';
import { useCartStore, type ShopifyProduct, type CartItem } from '@/stores/cartStore';
import { ShoppingCart, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShopifyProductGrid = () => {
  const [products, setProducts] = useState<ShopifyProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      const fetchedProducts = await fetchProducts(20);
      setProducts(fetchedProducts);
      setLoading(false);
    };
    loadProducts();
  }, []);

  const handleAddToCart = (product: ShopifyProduct) => {
    const defaultVariant = product.node.variants.edges[0]?.node;
    if (!defaultVariant) return;

    const cartItem: CartItem = {
      product,
      variantId: defaultVariant.id,
      variantTitle: defaultVariant.title,
      price: defaultVariant.price,
      quantity: 1,
      selectedOptions: defaultVariant.selectedOptions,
    };
    
    addItem(cartItem);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="text-center py-20">
        <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-2xl font-bold mb-2">No products found</h3>
        <p className="text-muted-foreground mb-6">
          Add products to your store to get started selling!
        </p>
        <p className="text-sm text-muted-foreground">
          Tell me what products you'd like to add (e.g., "Add an LED strip light for $29.99")
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products.map((product) => {
        const image = product.node.images.edges[0]?.node;
        const price = product.node.priceRange.minVariantPrice;

        return (
          <Card key={product.node.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
            <Link to={`/product/${product.node.handle}`}>
              <div className="aspect-square overflow-hidden bg-secondary/20">
                {image ? (
                  <img
                    src={image.url}
                    alt={image.altText || product.node.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingCart className="w-16 h-16 text-muted-foreground" />
                  </div>
                )}
              </div>
            </Link>
            
            <CardContent className="pt-4">
              <Link to={`/product/${product.node.handle}`}>
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 hover:text-primary transition-colors">
                  {product.node.title}
                </h3>
              </Link>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
                {product.node.description}
              </p>
              <p className="text-2xl font-bold">
                {price.currencyCode} ${parseFloat(price.amount).toFixed(2)}
              </p>
            </CardContent>
            
            <CardFooter>
              <Button 
                onClick={() => handleAddToCart(product)}
                className="w-full"
              >
                <ShoppingCart className="w-4 h-4 mr-2" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
};
