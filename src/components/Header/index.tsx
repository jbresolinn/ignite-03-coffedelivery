import { useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
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

  const { totalQuantity } = useContext(CartContext)
  const navigate = useNavigate()

  function formatLocationLabel(location: Location) {
    const formatted =
      location.nome + ', ' + location.microrregiao.mesorregiao.UF.sigla

    return formatted
  }

  function handleToggleLocationModal() {
    toggleOpenModal()
  }

  function handleGoToCart() {
    navigate('/cart')
  }

  const cartButtonDisabled = totalQuantity < 1

  return (
    <>
      <HeaderContainer>
        <NavLink to="/">
          <img src={logo} alt="coffe delivery logo" />
        </NavLink>

        <ActionsContainer>
          <LocationButton type="button" onClick={handleToggleLocationModal}>
            <MapPin size={22} weight="fill" />
            {currentLocation && formatLocationLabel(currentLocation)}
            {!currentLocation && <span>Selecione um local</span>}
          </LocationButton>

          <CartButton
            type="button"
            onClick={handleGoToCart}
            disabled={cartButtonDisabled}
          >
            <ShoppingCart size={22} weight="fill" />
            <small>{totalQuantity}</small>
          </CartButton>
        </ActionsContainer>
      </HeaderContainer>

      {locationModalIsOpen && <LocationSearch />}
    </>
  )
}
