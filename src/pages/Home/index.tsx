import { HomeBanner } from '../../components/HomeBanner'
import {
  ActionsContainer,
  CoffeCategoriesList,
  CoffeDetailsContainer,
  CoffeList,
  CoffeListContainer,
  HomeContainer,
} from './styles'

import coffeImg from '../../assets/coffes/expresso-tradicional.png'
import { ShoppingCart } from 'phosphor-react'
import { coffes } from '../../utils/coffes'

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner />

      <CoffeListContainer>
        <h2>Nossos cafés</h2>

        <CoffeList>
          {coffes.map((coffe) => {
            return (
              <li key={coffe.id}>
                <img src={coffeImg} alt="" />

                <CoffeDetailsContainer>
                  <CoffeCategoriesList>
                    <span>tradicional</span>
                    <span>especial</span>
                  </CoffeCategoriesList>

                  <strong>Expresso Tradicional</strong>
                  <p>O tradicional café feito com água quente e grãos moídos</p>
                </CoffeDetailsContainer>

                <ActionsContainer>
                  <span>9,90</span>

                  <input type="number" min={1} max={10} />

                  <button type="button">
                    <ShoppingCart size={22} weight="fill" />
                  </button>
                </ActionsContainer>
              </li>
            )
          })}
        </CoffeList>
      </CoffeListContainer>
    </HomeContainer>
  )
}
