import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type CartItem = {
  id: number
  slug: string
  name: string
  price: number
  quantity: number
  image: string
}

type CartState = {
  items: CartItem[]
  addItem: (product: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: number) => void
  updateQuantity: (id: number, quantity: number) => void
  clearCart: () => void
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      items: [],
      addItem: (product) => 
        set((state) => {
          const existingItem = state.items.find(item => item.id === product.id)
          if (existingItem) {
            return {
              items: state.items.map(item =>
                item.id === product.id 
                  ? { ...item, quantity: item.quantity + 1 } 
                  : item
              )
            }
          }
          return { items: [...state.items, { ...product, quantity: 1 }] }
        }),
      removeItem: (id) => 
        set((state) => ({ items: state.items.filter(item => item.id !== id) })),
      updateQuantity: (id, quantity) => 
        set((state) => ({
          items: state.items.map(item =>
            item.id === id ? { ...item, quantity } : item
          )
        })),
      clearCart: () => set({ items: [] })
    }),
    {
      name: 'mini-commerce-cart',
      storage: createJSONStorage(() => localStorage)
    }
  )
)

// Selectors
export const cartTotalSelector = (state: CartState) => 
  state.items.reduce((total, item) => total + (item.price * item.quantity), 0)

export const cartItemsCountSelector = (state: CartState) =>
  state.items.reduce((count, item) => count + item.quantity, 0)