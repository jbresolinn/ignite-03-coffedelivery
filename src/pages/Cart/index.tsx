import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { ShippingAddressContextProvider } from '../../contexts/ShippingAddressContext'
import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { Resume } from './components/Resume'
import { CartContainer, LeftContainer, RightContainer } from './styles'
import { FormProvider, useForm } from 'react-hook-form'

interface NewAddressFormData {
  postalCode: string
  street: string
  number: number
  complement: string
  district: string
  city: string
  state: string
}

const newAddressFormValidationSchema = zod.object({
  postalCode: zod.string(),
  street: zod.string(),
  number: zod.number().min(1, 'Informe o número'),
  complement: zod.string().optional(),
  district: zod.string(),
  city: zod.string(),
  state: zod.string(),
})

export function Cart() {
  const newAddressForm = useForm<NewAddressFormData>({
    resolver: zodResolver(newAddressFormValidationSchema),
    defaultValues: {
      postalCode: '',
      street: '',
      number: 0,
      complement: '',
      district: '',
      city: '',
      state: '',
    },
  })

  return (
    <CartContainer>
      <LeftContainer>
        <ShippingAddressContextProvider>
          <FormProvider {...newAddressForm}>
            <Address />
          </FormProvider>
        </ShippingAddressContextProvider>
        <Payment />
      </LeftContainer>

      <RightContainer>
        <Resume />
      </RightContainer>
    </CartContainer>
  )
}
