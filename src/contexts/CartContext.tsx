import { createContext, ReactNode, useState } from 'react'
import { Coffe } from '../data/coffes'

interface CartCoffe extends Coffe {
  quantity: number
}

interface CartContextType {
  totalAmount: number
  addToCart: (coffe: CartCoffe) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<Coffe[]>([])

  const totalAmount = cartProducts.length ?? 0

  function addToCart(coffe: CartCoffe) {
    const coffeAlreadyExists = cartProducts.find(
      (product) => product.id === coffe.id,
    )

    if (coffeAlreadyExists) {
      // TODO: add cart to already exists products
    } else {
      setCartProducts((state) => [...state, coffe])
    }
  }

  return (
    <CartContext.Provider value={{ totalAmount, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
