import { ShoppingCart } from 'phosphor-react'
import { coffes } from '../../../data/coffes'

import {
  ActionsContainer,
  CoffeCategoriesList,
  CoffeDetailsContainer,
  CoffeListContainer,
  CoffeListing,
} from './styles'

export function CoffeList() {
  return (
    <CoffeListContainer>
      <h2>Nossos cafés</h2>

      <CoffeListing>
        {coffes.map((coffe) => {
          return (
            <li key={coffe.id}>
              <img src={`./images/coffes/${coffe.imageUrl}`} alt="" />

              <CoffeDetailsContainer>
                <CoffeCategoriesList>
                  {coffe.categories.map((category: string) => {
                    return <span key={category}>{category}</span>
                  })}
                </CoffeCategoriesList>

                <strong>{coffe.name}</strong>
                <p>{coffe.description}</p>
              </CoffeDetailsContainer>

              <ActionsContainer>
                <span>{coffe.price}</span>

                <input type="number" min={1} max={10} />

                <button type="button">
                  <ShoppingCart size={22} weight="fill" />
                </button>
              </ActionsContainer>
            </li>
          )
        })}
      </CoffeListing>
    </CoffeListContainer>
  )
}
