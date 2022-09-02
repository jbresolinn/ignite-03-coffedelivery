import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { LocationSearch } from '../Location'
import { Location, LocationContext } from '../../contexts/LocationContext'
import { CartContext } from '../../contexts/CartContext'

import {
  ActionsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
} from './styles'

import logo from '../../assets/logo.svg'

export function Header() {
  const { currentLocation, locationModalIsOpen, toggleOpenModal } =
    useContext(LocationContext)

  const { totalAmount } = useContext(CartContext)

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

        <ActionsContainer>
          <LocationButton type="button" onClick={handleToggleLocationModal}>
            <MapPin size={22} weight="fill" />
            {currentLocation && formatLocationLabel(currentLocation)}
            {!currentLocation && <span>Selecione um local</span>}
          </LocationButton>
          <NavLink to="/cart">
            <CartButton type="button">
              <ShoppingCart size={22} weight="fill" />
              <small>{totalAmount}</small>
            </CartButton>
          </NavLink>
        </ActionsContainer>
      </HeaderContainer>

      {locationModalIsOpen && <LocationSearch />}
    </>
  )
}
