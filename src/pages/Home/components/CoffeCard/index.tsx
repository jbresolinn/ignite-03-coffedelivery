import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { Coffe } from '../../../../data/coffes'
import { formatPrice } from '../../../../utils/formatPrice'

import {
  ActionsContainer,
  CoffeCategoriesList,
  CoffeDetailsContainer,
  NumberInput,
} from './styles'

interface CoffeCardProps {
  coffe: Coffe
}

export function CoffeCard({ coffe }: CoffeCardProps) {
  const [quantity, setQuantity] = useState(1)

  function handleIncrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleDecrementQuantity() {
    setQuantity((state) => state - 1)
  }

  const decrementButtonDisabled = quantity === 1
  const incrementButtonDisabled = quantity >= 10

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
        <span>{formatPrice(coffe.price)}</span>

        <NumberInput>
          <button
            type="button"
            onClick={handleDecrementQuantity}
            disabled={decrementButtonDisabled}
          >
            <Minus size={14} />
          </button>

          <input type="number" min={1} max={10} value={quantity} disabled />

          <button
            type="button"
            onClick={handleIncrementQuantity}
            disabled={incrementButtonDisabled}
          >
            <Plus size={14} />
          </button>
        </NumberInput>

        <button type="button">
          <ShoppingCart size={22} weight="fill" />
        </button>
      </ActionsContainer>
    </li>
  )
}
