import { createContext, ReactNode, useEffect, useState } from 'react'
import { produce } from 'immer'
import { Coffe } from '../data/coffes'

export interface CartProduct extends Coffe {
  quantity: number
}

interface CartContextType {
  totalAmount: number
  totalQuantity: number
  deliveryPrice: number
  cartProducts: CartProduct[]
  addToCart: (coffe: CartProduct) => void
  updatedQuantityCart: (productId: string, quantity: number) => void
  removeProduct: (productId: string) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([])

  const totalQuantity = cartProducts.length ?? 0
  const deliveryPrice = 10
  const totalAmount = cartProducts.reduce(
    (total, product) => total + product.price * product.quantity,
    0,
  )

  function addToCart(coffe: CartProduct) {
    const productAlreadyExistsIndex = cartProducts.findIndex(
      (product) => product.id === coffe.id,
    )

    const newCart = produce(cartProducts, (draft) => {
      if (productAlreadyExistsIndex >= 0) {
        draft[productAlreadyExistsIndex].quantity = coffe.quantity
      } else {
        draft.push(coffe)
      }
    })

    setCartProducts(newCart)
  }

  function updatedQuantityCart(productId: string, quantity: number) {
    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === productId,
    )

    const updatedCart = produce(cartProducts, (draft) => {
      if (productIndex >= 0) {
        draft[productIndex].quantity = quantity
      }
    })

    setCartProducts(updatedCart)
  }

  function removeProduct(productId: string) {
    const productIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === productId,
    )

    const updatedCart = produce(cartProducts, (draft) => {
      if (productIndex >= 0) {
        draft.splice(productIndex, 1)
      }
    })

    setCartProducts(updatedCart)
  }

  useEffect(() => {
    console.log(cartProducts)
  }, [cartProducts])

  return (
    <CartContext.Provider
      value={{
        totalAmount,
        totalQuantity,
        deliveryPrice,
        addToCart,
        cartProducts,
        updatedQuantityCart,
        removeProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
