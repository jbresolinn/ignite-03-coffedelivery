import { createContext, ReactNode, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ShippingAddress } from './ShippingAddressContext'

interface NewOrder {
  shippingAddress: ShippingAddress
  payment: string
  deliveryTime: string
}

interface OrderContextType {
  newOrder: NewOrder
  createOrder: (order: NewOrder) => void
}

interface OrderContextProviderProps {
  children: ReactNode
}

export const OrderContext = createContext({} as OrderContextType)

export function OrderContextProvider({ children }: OrderContextProviderProps) {
  const navigate = useNavigate()

  const [newOrder, setNewOrder] = useState<NewOrder>({} as NewOrder)

  function createOrder(order: NewOrder) {
    setNewOrder(order)
    navigate('/orderConfirmation')
  }

  return (
    <OrderContext.Provider value={{ newOrder, createOrder }}>
      {children}
    </OrderContext.Provider>
  )
}
