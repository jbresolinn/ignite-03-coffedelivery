import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { ThemeContext } from 'styled-components'
import { OrderContext } from '../../contexts/OrderContext'
import {
  DeliveryDetailsContainer,
  IconContainer,
  IllustrationContainer,
  OrderConfirmationContainer,
  TextContainer,
} from './styles'

export function OrderConfirmation() {
  const { newOrder } = useContext(OrderContext)
  const { white } = useContext(ThemeContext)

  useEffect(() => {
    document.body.style.background = white
  }, [white])

  return (
    <OrderConfirmationContainer>
      <header>
        <h1>Uhu! Pedido confirmado</h1>
        <span>Agora é só aguardar que logo o café chegará até você</span>
      </header>

      <main>
        <DeliveryDetailsContainer>
          <li>
            <IconContainer background="purple">
              <MapPin size={16} weight="fill" />
            </IconContainer>

            <TextContainer>
              <span>
                Entrega em{' '}
                <strong>
                  {newOrder.shippingAddress.street},{' '}
                  {newOrder.shippingAddress.number}
                </strong>
              </span>

              <span>
                {newOrder.shippingAddress.district} -{' '}
                {newOrder.shippingAddress.city},{' '}
                {newOrder.shippingAddress.state}
              </span>
            </TextContainer>
          </li>

          <li>
            <IconContainer background="yellow">
              <Timer size={16} weight="fill" />
            </IconContainer>

            <TextContainer>
              <span>Previsão de entrega</span>
              <strong>{newOrder.deliveryTime}</strong>
            </TextContainer>
          </li>

          <li>
            <IconContainer background="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </IconContainer>

            <TextContainer>
              <span>Pagamento na entrega</span>
              <strong>{newOrder.payment}</strong>
            </TextContainer>
          </li>
        </DeliveryDetailsContainer>

        <IllustrationContainer>
          <img src="./images/confirmation-illustration.svg" alt="" />
        </IllustrationContainer>
      </main>
    </OrderConfirmationContainer>
  )
}
