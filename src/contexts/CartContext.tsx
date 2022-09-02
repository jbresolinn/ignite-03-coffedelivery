import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'
import { Coffe } from '../data/coffes'

interface CartProduct extends Coffe {
  quantity: number
}

interface CartContextType {
  totalAmount: number
  addToCart: (coffe: CartProduct) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const totalAmount = cartProducts.length ?? 0

  function addToCart(coffe: CartProduct) {
    const productAlreadyExistsIndex = cartProducts.findIndex(
      (product) => product.id === coffe.id,
    )

    console.log('productAlreadyExistsIndex:', productAlreadyExistsIndex)

    const newCart = produce(cartProducts, (draft) => {
      if (productAlreadyExistsIndex >= 0) {
        draft[productAlreadyExistsIndex].quantity = coffe.quantity
      } else {
        draft.push(coffe)
      }
    })

    setCartProducts(newCart)
  }

  useEffect(() => {
    console.log(cartProducts)
  }, [cartProducts])

  return (
    <CartContext.Provider value={{ totalAmount, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}
