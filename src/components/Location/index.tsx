import { MagnifyingGlass, MapPinLine } from 'phosphor-react'
import { LocationContainer, LocationList } from './styles'

export function Location() {
  return (
    <LocationContainer>
      <div>
        <header>
          <MapPinLine size={48} />
          <h2>Onde você quer receber seu pedido?</h2>

          <fieldset>
            <MagnifyingGlass size={22} />
            <input type="text" placeholder="Buscar cidade" />
          </fieldset>
        </header>

        <LocationList>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
          <li>
            Cidade 1 - <span>PR</span>
          </li>
        </LocationList>
      </div>
    </LocationContainer>
  )
}
