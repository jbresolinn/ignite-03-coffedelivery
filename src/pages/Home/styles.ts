import styled from 'styled-components'

export const HomeContainer = styled.main`
  margin-bottom: 9.8125rem;
`
export const CoffeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;

  h2 {
    font: 800 2rem 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-800']};
    line-height: 1.3;

    @media ${(props) => props.theme['desktop-small-bp']} {
      text-align: center;
    }
  }
`

export const CoffeListing = styled.ul`
  list-style: none;
  margin: 2.125rem 0 0;

  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 40px 32px;

  @media ${(props) => props.theme['desktop-small-bp']} {
    justify-content: center;
  }

  li {
    width: 100%;
    max-width: 16rem;
    min-height: 19.375rem;
    padding: 1.25rem;
    background: ${(props) => props.theme['gray-200']};
    border-radius: 6px 36px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    > img {
      margin-top: -2.5rem;
    }
  }
`
