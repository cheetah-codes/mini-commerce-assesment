// import { create } from 'zustand'
// import { persist, createJSONStorage } from 'zustand/middleware'

// type CartItem = {
//   id: number
//   slug: string
//   name: string
//   price: number
//   quantity: number
//   image: string
// }

// type CartState = {
//   items: CartItem[]
//   addItem: (product: Omit<CartItem, 'quantity'>) => void
//   removeItem: (id: number) => void
//   updateQuantity: (id: number, quantity: number) => void
//   clearCart: () => void
// }

// export const useCartStore = create<CartState>()(
//   persist(
//     (set) => ({
//       items: [],
//       addItem: (product) =>
//         set((state) => {
//           const existingItem = state.items.find(item => item.id === product.id)
//           if (existingItem) {
//             return {
//               items: state.items.map(item =>
//                 item.id === product.id
//                   ? { ...item, quantity: item.quantity + 1 }
//                   : item
//               )
//             }
//           }
//           return { items: [...state.items, { ...product, quantity: 1 }] }
//         }),
//       removeItem: (id) =>
//         set((state) => ({ items: state.items.filter(item => item.id !== id) })),
//       updateQuantity: (id, quantity) =>
//         set((state) => ({
//           items: state.items.map(item =>
//             item.id === id ? { ...item, quantity } : item
//           )
//         })),
//       clearCart: () => set({ items: [] })
//     }),
//     {
//       name: 'mini-commerce-cart',
//       storage: createJSONStorage(() => localStorage)
//     }
//   )
// )

// // Selectors
// export const cartTotalSelector = (state: CartState) =>
//   state.items.reduce((total, item) => total + (item.price * item.quantity), 0)

// export const cartItemsCountSelector = (state: CartState) =>
//   state.items.reduce((count, item) => count + item.quantity, 0)

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/types/index";

interface StoreType {
  // cart
  cartProduct: Product[];
  addToCart: (product: Product) => Promise<void>;
  decreaseQuantity: (productId: number) => void;
  removeFromCart: (productId: number) => void;
  resetCart: () => void;
  // favorite
  favoriteProduct: Product[];
  addToFavorite: (product: Product) => Promise<void>;
  removeFromFavorite: (productId: number) => void;
  resetFavorite: () => void;
}

// Custom storage object
const customStorage = {
  getItem: (name: string) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name: string, value: any) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name: string) => {
    localStorage.removeItem(name);
  },
};

export const store = create<StoreType>()(
  persist(
    (set) => ({
      cartProduct: [],
      favoriteProduct: [],

      addToCart: (product: Product) => {
        return new Promise<void>((resolve) => {
          set((state: StoreType) => {
            const existingProduct = state.cartProduct.find(
              (p) => p.id === product.id
            );

            if (existingProduct) {
              return {
                cartProduct: state.cartProduct.map((p) =>
                  p.id === product.id
                    ? { ...p, quantity: (p.quantity || 0) + 1 }
                    : p
                ),
              };
            } else {
              return {
                cartProduct: [
                  ...state.cartProduct,
                  { ...product, quantity: 1 },
                ],
              };
            }
          });
          resolve();
        });
      },
      decreaseQuantity: (productId: number) => {
        set((state: StoreType) => {
          const existingProduct = state.cartProduct.find(
            (p) => p.id === productId
          );

          if (existingProduct) {
            return {
              cartProduct: state.cartProduct.map((p) =>
                p.id === productId
                  ? { ...p, quantity: Math.max((p?.quantity ?? 1) - 1, 1) }
                  : p
              ),
            };
          } else {
            return state;
          }
        });
      },
      removeFromCart: (productId: number) => {
        set((state: StoreType) => ({
          cartProduct: state.cartProduct.filter(
            (item) => item.id !== productId
          ),
        }));
      },
      resetCart: () => {
        set({ cartProduct: [] });
      },
      addToFavorite: (product: Product) => {
        return new Promise<void>((resolve) => {
          set((state: StoreType) => {
            const isFavorite = state.favoriteProduct.some(
              (item) => item.id === product.id
            );
            return {
              favoriteProduct: isFavorite
                ? state.favoriteProduct.filter((item) => item.id !== product.id)
                : [...state.favoriteProduct, { ...product }],
            };
          });
          resolve();
        });
      },
      removeFromFavorite: (productId: number) => {
        set((state: StoreType) => ({
          favoriteProduct: state.favoriteProduct.filter(
            (item) => item.id !== productId
          ),
        }));
      },
      resetFavorite: () => {
        set({ favoriteProduct: [] });
      },
    }),
    {
      name: "store-storage",
      storage: customStorage,
    }
  )
);
