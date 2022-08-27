import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/logo.svg'
import { LocationSearch } from '../Location'
import { useContext } from 'react'
import { Location, LocationContext } from '../../contexts/LocationContext'

export function Header() {
  const { currentLocation, locationModalIsOpen, toggleOpenModal } =
    useContext(LocationContext)

  function formatLocationLabel(location: Location) {
    const formatted =
      location.nome + ', ' + location.microrregiao.mesorregiao.UF.sigla

    return formatted
  }

  function handleToggleLocationModal() {
    toggleOpenModal()
  }

  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="coffe delivery logo" />

        <div>
          <LocationButton type="button" onClick={handleToggleLocationModal}>
            <MapPin size={22} weight="fill" />
            {currentLocation && formatLocationLabel(currentLocation)}
            {!currentLocation && <span>Selecione um local</span>}
          </LocationButton>
          <CartButton type="button">
            <ShoppingCart size={22} weight="fill" />
            <small>3</small>
          </CartButton>
        </div>
      </HeaderContainer>

      {locationModalIsOpen && <LocationSearch />}
    </>
  )
}
