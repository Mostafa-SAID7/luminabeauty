import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
  type ReactNode,
} from "react";
import type { CartItem } from "@/models";
import { toast } from "sonner";

interface CartContextType {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "qty">) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  subtotal: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
  lastAddedItem: Omit<CartItem, "qty"> | null;
  setLastAddedItem: (item: Omit<CartItem, "qty"> | null) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      try {
        const saved = localStorage.getItem("cart");
        return saved ? JSON.parse(saved) : [];
      } catch {
        return [];
      }
    }
    return [];
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [lastAddedItem, setLastAddedItem] = useState<Omit<CartItem, "qty"> | null>(null);

  // Persist cart to localStorage whenever items change
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }, [items]);

  // Memoised derived values — only recompute when items array changes
  const totalItems = useMemo(() => items.reduce((sum, item) => sum + item.qty, 0), [items]);

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.qty, 0),
    [items],
  );

  const addToCart = useCallback(
    (item: Omit<CartItem, "qty">) => {
      setLastAddedItem(item);
      const existing = items.find((i) => i.id === item.id);
      if (existing) {
        toast.success(`Updated ${item.name} quantity`, {
          description: "Your cart has been updated.",
        });
      } else {
        toast.success(`${item.name} added to cart`, {
          description: "Ready to enhance your beauty?",
        });
      }

      setItems((prev) => {
        const existingInPrev = prev.find((i) => i.id === item.id);
        if (existingInPrev) {
          return prev.map((i) => (i.id === item.id ? { ...i, qty: i.qty + 1 } : i));
        }
        return [...prev, { ...item, qty: 1 }];
      });
    },
    [items],
  );

  const removeFromCart = useCallback(
    (id: string) => {
      const item = items.find((i) => i.id === id);
      if (item) toast.info(`${item.name} removed from cart`);

      setItems((prev) => prev.filter((i) => i.id !== id));
    },
    [items],
  );

  const updateQuantity = useCallback(
    (id: string, qty: number) => {
      if (qty <= 0) {
        removeFromCart(id);
        return;
      }
      setItems((prev) => prev.map((i) => (i.id === id ? { ...i, qty } : i)));
    },
    [removeFromCart],
  );

  const clearCart = useCallback(() => {
    setItems([]);
    toast.info("Cart cleared");
  }, []);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        subtotal,
        isCartOpen,
        setIsCartOpen,
        lastAddedItem,
        setLastAddedItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
