import { HomeBanner } from './components/HomeBanner'
import { HomeContainer } from './styles'

import { CoffeList } from './components/CoffeList'

// import img from '../../assets/coffes'

export function Home() {
  return (
    <HomeContainer>
      <HomeBanner />

      <CoffeList />
    </HomeContainer>
  )
}
