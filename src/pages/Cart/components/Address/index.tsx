import { MapPinLine } from 'phosphor-react'
import { Input } from '../../../../components/Input'
import { AddressContainer, AddressContent, AddressForm } from './styles'

export function Address() {
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
            <Input type="tel" placeholder="CEP" maxWidth="12.5rem" />
            <a
              target="_blank noreferrer noopenner"
              href="https://buscacepinter.correios.com.br/app/endereco/index.php"
            >
              Não sei meu CEP
            </a>
          </fieldset>

          <fieldset>
            <Input type="text" placeholder="Rua" />
          </fieldset>

          <fieldset>
            <Input type="number" placeholder="Número" maxWidth="12.5rem" />
            <Input type="text" placeholder="Complemento" />
          </fieldset>

          <fieldset>
            <Input type="text" placeholder="Bairro" maxWidth="12.5rem" />
            <Input type="text" placeholder="Cidade" />
            <Input type="text" placeholder="UF" maxWidth="3.75rem" />
          </fieldset>
        </AddressForm>
      </AddressContent>
    </AddressContainer>
  )
}
