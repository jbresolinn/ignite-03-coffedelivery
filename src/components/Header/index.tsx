import { MapPin, ShoppingCart } from 'phosphor-react'

import { CartButton, HeaderContainer, LocationButton } from './styles'
import logo from '../../assets/logo.svg'
import { Location } from '../Location'

export function Header() {
  return (
    <>
      <HeaderContainer>
        <img src={logo} alt="coffe delivery logo" />

        <div>
          <LocationButton type="button">
            <MapPin size={22} weight="fill" />
            Porto Alegre, RS
          </LocationButton>
          <CartButton type="button">
            <ShoppingCart size={22} weight="fill" />
            <small>3</small>
          </CartButton>
        </div>
      </HeaderContainer>

      <Location />
    </>
  )
}
