import { v4 as uuidv4 } from 'uuid'

export type PaymentMethodsType = {
  id: string
  name: string
  active: boolean
}

export const paymentMethods: PaymentMethodsType[] = [
  {
    id: uuidv4(),
    name: 'Cartão de crédito',
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Cartão de débito',
    active: true,
  },
  {
    id: uuidv4(),
    name: 'Dinheiro',
    active: true,
  },
]
