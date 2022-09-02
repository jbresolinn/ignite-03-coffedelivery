import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { Resume } from './components/Resume'
import { CartContainer, LeftContainer, RightContainer } from './styles'

export function Cart() {
  return (
    <CartContainer>
      <LeftContainer>
        <Address />
        <Payment />
      </LeftContainer>

      <RightContainer>
        <Resume />
      </RightContainer>
    </CartContainer>
  )
}
