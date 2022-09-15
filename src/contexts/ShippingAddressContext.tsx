import { createContext, ReactNode, useState } from 'react'
import { VIA_CEP_API_URL } from '../data/constants'

export interface ShippingAddress {
  postalCode: string
  street: string
  district: string
  city: string
  state: string
  complement?: string
  number?: string
}

interface ShippingAddressContextType {
  shippingAddress: ShippingAddress
  addressFetchError: boolean
  getAddressByPostalCode: (postalCode: string) => void
  updateShippingAddress: (shippingAddress: ShippingAddress) => void
}

interface ShippingAddressContextProviderProps {
  children: ReactNode
}

export const ShippingAddressContext = createContext(
  {} as ShippingAddressContextType,
)

export function ShippingAddressContextProvider({
  children,
}: ShippingAddressContextProviderProps) {
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress>(
    {} as ShippingAddress,
  )
  const [addressFetchError, setAddressFetchError] = useState(false)

  function getAddressByPostalCode(postalCode: string) {
    try {
      fetch(VIA_CEP_API_URL.replace(':postalCode', postalCode))
        .then((response) => response.json())
        .then((data) => {
          const newShippingAddress = {
            postalCode: data.cep,
            street: data.logradouro,
            district: data.bairro,
            city: data.localidade,
            state: data.uf,
          }

          setShippingAddress(newShippingAddress)
          !!addressFetchError && setAddressFetchError(false)
          return newShippingAddress
        })
        .catch((error) => {
          console.error(
            `[SHIPPING_ADDRESS_CONTEXT]getAddressByPostalCode:`,
            error,
          )
          setAddressFetchError(true)
        })
    } catch (error) {
      console.error(`[SHIPPING_ADDRESS_CONTEXT]getAddressByPostalCode:`, error)
      setAddressFetchError(true)
    }
  }

  function updateShippingAddress(shippingAddress: ShippingAddress) {
    setShippingAddress(shippingAddress)
  }

  return (
    <ShippingAddressContext.Provider
      value={{
        getAddressByPostalCode,
        shippingAddress,
        addressFetchError,
        updateShippingAddress,
      }}
    >
      {children}
    </ShippingAddressContext.Provider>
  )
}
