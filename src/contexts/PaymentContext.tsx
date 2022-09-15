import { createContext, ReactNode, useState } from 'react'

interface PaymentContextType {
  selectPayment: string
  setNewPayment: (payment: string) => void
}

interface PaymentContextProviderProps {
  children: ReactNode
}
export const PaymentContext = createContext({} as PaymentContextType)

export function PaymentContextProvider({
  children,
}: PaymentContextProviderProps) {
  const [selectPayment, setSelectPayment] = useState('')

  function setNewPayment(payment: string) {
    setSelectPayment(payment)
  }

  return (
    <PaymentContext.Provider value={{ selectPayment, setNewPayment }}>
      {children}
    </PaymentContext.Provider>
  )
}
