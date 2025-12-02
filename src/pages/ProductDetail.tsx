import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { fetchProductByHandle } from '@/lib/shopify';
import { useCartStore, type ShopifyProduct, type CartItem } from '@/stores/cartStore';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, Loader2, ArrowLeft, Star, Truck, Shield, RotateCcw, CheckCircle2 } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from 'sonner';

export default function ProductDetail() {
  const { handle } = useParams<{ handle: string }>();
  const [product, setProduct] = useState<ShopifyProduct | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedVariantIndex, setSelectedVariantIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const addItem = useCartStore(state => state.addItem);

  useEffect(() => {
    const loadProduct = async () => {
      if (!handle) return;
      setLoading(true);
      const fetchedProduct = await fetchProductByHandle(handle);
      setProduct(fetchedProduct);
      setLoading(false);
    };
    loadProduct();
  }, [handle]);

  // ... keep existing code (loading state)
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-20">
          <Loader2 className="w-8 h-8 animate-spin text-primary" />
        </div>
        <Footer />
      </div>
    );
  }

  // ... keep existing code (not found state)
  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Product not found</h2>
            <Link to="/">
              <Button>
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Store
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const selectedVariant = product.node.variants.edges[selectedVariantIndex]?.node;
  const images = product.node.images.edges;
  const priceNum = parseFloat(selectedVariant?.price.amount || '0');

  const handleAddToCart = () => {
    if (!selectedVariant) return;

    const cartItem: CartItem = {
      product,
      variantId: selectedVariant.id,
      variantTitle: selectedVariant.title,
      price: selectedVariant.price,
      quantity: 1,
      selectedOptions: selectedVariant.selectedOptions,
    };
    
    addItem(cartItem);
    toast.success(`${product.node.title} added to cart!`, {
      position: 'top-center',
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-8 pt-24">
        <Link to="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Store
          </Button>
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4">
            <Card className="overflow-hidden">
              <div className="aspect-square bg-secondary/20">
                {images[selectedImage]?.node ? (
                  <img
                    src={images[selectedImage].node.url}
                    alt={images[selectedImage].node.altText || product.node.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <ShoppingCart className="w-24 h-24 text-muted-foreground" />
                  </div>
                )}
              </div>
            </Card>

            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-md overflow-hidden border-2 transition-colors ${
                      selectedImage === index ? 'border-primary' : 'border-transparent'
                    }`}
                  >
                    <img
                      src={image.node.url}
                      alt={image.node.altText || `Image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Star rating */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-led-yellow text-led-yellow" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(47 reviews)</span>
            </div>
            
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.node.title}</h1>
              <div className="flex items-baseline gap-3 mb-4">
                <p className="text-4xl font-bold text-primary">
                  ${priceNum.toFixed(2)}
                </p>
                {priceNum > 30 && (
                  <p className="text-xl text-muted-foreground line-through">
                    ${(priceNum * 1.25).toFixed(2)}
                  </p>
                )}
                {selectedVariant?.availableForSale ? (
                  <Badge className="bg-led-green border-0 text-white">In Stock</Badge>
                ) : (
                  <Badge variant="secondary">Out of Stock</Badge>
                )}
              </div>
            </div>

            {product.node.description && (
              <div>
                <p className="text-foreground/80 text-lg leading-relaxed">{product.node.description}</p>
              </div>
            )}

            {/* Trust badges inline */}
            <div className="grid grid-cols-3 gap-4 py-4 border-y border-border">
              <div className="text-center">
                <Truck className="w-5 h-5 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Free Shipping</span>
              </div>
              <div className="text-center">
                <Shield className="w-5 h-5 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">2-Year Warranty</span>
              </div>
              <div className="text-center">
                <RotateCcw className="w-5 h-5 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">30-Day Returns</span>
              </div>
            </div>

            {product.node.options.length > 0 && product.node.options[0].name !== 'Title' && (
              <div className="space-y-4">
                {product.node.options.map((option) => (
                  <div key={option.name}>
                    <h3 className="font-semibold mb-2">{option.name}</h3>
                    <div className="flex flex-wrap gap-2">
                      {option.values.map((value) => {
                        const variantIndex = product.node.variants.edges.findIndex(
                          v => v.node.selectedOptions.some(o => o.name === option.name && o.value === value)
                        );
                        const isSelected = selectedVariantIndex === variantIndex;
                        
                        return (
                          <Button
                            key={value}
                            variant={isSelected ? "default" : "outline"}
                            onClick={() => setSelectedVariantIndex(variantIndex)}
                          >
                            {value}
                          </Button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <Button 
              onClick={handleAddToCart}
              disabled={!selectedVariant?.availableForSale}
              className="w-full"
              variant="gradient"
              size="lg"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Add to Cart - ${priceNum.toFixed(2)}
            </Button>

            {/* Benefits list */}
            <div className="space-y-2 pt-4">
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-led-green" />
                <span>Easy 10-minute installation</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-led-green" />
                <span>App & remote control included</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-led-green" />
                <span>16+ million colors available</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-foreground/80">
                <CheckCircle2 className="w-4 h-4 text-led-green" />
                <span>Energy efficient - saves up to 80%</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
