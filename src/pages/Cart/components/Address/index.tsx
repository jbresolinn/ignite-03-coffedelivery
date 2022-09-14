import { useContext, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { MapPinLine } from 'phosphor-react'

import { Input } from '../../../../components/Input'
import { ShippingAddressContext } from '../../../../contexts/ShippingAddressContext'
import { AddressContainer, AddressContent, AddressForm } from './styles'

export function Address() {
  const [
    addressFormAdditionalFieldsDisabled,
    setAddressFormAdditionalFieldsDisabled,
  ] = useState(true)
  const {
    shippingAddress,
    getAddressByPostalCode,
    addressFetchError,
    updateShippingAddress,
  } = useContext(ShippingAddressContext)

  const { register } = useFormContext()

  const addressFormFieldsIsDisabled = !addressFetchError

  function handleGetShippingAddressByPostalCode(postalCode: string) {
    if (postalCode && postalCode.length >= 8) {
      getAddressByPostalCode(postalCode)
      setAddressFormAdditionalFieldsDisabled(false)
    }
  }

  return (
    <AddressContainer>
      <h2>Complete seu pedido</h2>

      <AddressContent>
        <header>
          <MapPinLine size={22} />
          <div>
            <span>Endereço de Entrega</span>
            <small>Informe o endereço onde deseja receber seu pedido</small>
          </div>
        </header>

        <AddressForm>
          <fieldset>
            <Input
              type="tel"
              placeholder="CEP"
              id="postalCode"
              maxWidth="12.5rem"
              maxLength={9}
              {...(register('postalCode'),
              {
                onBlur: (e) =>
                  handleGetShippingAddressByPostalCode(e.target.value),
              })}
            />
            <a
              target="_blank noreferrer noopenner"
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            >
              Não sei meu CEP
            </a>
          </fieldset>

          <fieldset>
            <Input
              type="text"
              placeholder="Rua"
              id="street"
              value={shippingAddress.street ?? ''}
              disabled={addressFormFieldsIsDisabled}
              iconValidIsShow={true}
              isValid={!!shippingAddress.street}
              {...register('street')}
            />
          </fieldset>

          <fieldset>
            <Input
              type="number"
              id="number"
              placeholder="Número"
              maxWidth="12.5rem"
              min={0}
              disabled={addressFormAdditionalFieldsDisabled}
              value={shippingAddress.number ?? ''}
              iconValidIsShow={true}
              isValid={!!shippingAddress.number}
              {...(register('number'),
              {
                onChange: (e) =>
                  updateShippingAddress({
                    ...shippingAddress,
                    number: e.target.value,
                  }),
              })}
            />
            <Input
              type="text"
              id="complement"
              placeholder="Complemento"
              optional={true}
              value={shippingAddress.complement ?? ''}
              disabled={addressFormAdditionalFieldsDisabled}
              iconValidIsShow={true}
              isValid={!!shippingAddress.complement}
              {...(register('complement'),
              {
                onChange: (e) =>
                  updateShippingAddress({
                    ...shippingAddress,
                    complement: e.target.value,
                  }),
              })}
            />
          </fieldset>

          <fieldset>
            <Input
              type="text"
              id="district"
              placeholder="Bairro"
              maxWidth="12.5rem"
              value={shippingAddress.district ?? ''}
              disabled={addressFormFieldsIsDisabled}
              iconValidIsShow={true}
              isValid={!!shippingAddress.district}
              {...register('district')}
            />
            <Input
              type="text"
              id="city"
              placeholder="Cidade"
              value={shippingAddress.city ?? ''}
              disabled={addressFormFieldsIsDisabled}
              iconValidIsShow={true}
              isValid={!!shippingAddress.city}
              {...register('city')}
            />
            <Input
              type="text"
              id="state"
              placeholder="UF"
              maxWidth="6rem"
              value={shippingAddress.state ?? ''}
              iconValidIsShow={true}
              isValid={!!shippingAddress.state}
              disabled={addressFormFieldsIsDisabled}
              {...register('state')}
            />
          </fieldset>
        </AddressForm>
      </AddressContent>
    </AddressContainer>
  )
}
