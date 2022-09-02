import { HomeBanner } from './components/HomeBanner'
import { CoffeListContainer, CoffeListing, HomeContainer } from './styles'

import { CoffeCard } from './components/CoffeCard'
import { coffes } from '../../data/coffes'

// import img from '../../assets/coffes'

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner />

      <CoffeListContainer>
        <h2>Nossos cafés</h2>

        <CoffeListing>
          {coffes.map((coffe) => {
            return <CoffeCard key={coffe.id} coffe={coffe} />
          })}
        </CoffeListing>
      </CoffeListContainer>
    </HomeContainer>
  )
}
