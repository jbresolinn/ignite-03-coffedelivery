import styled from 'styled-components'

export const CartContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  margin: 2.5rem 0 0;

  @media ${(props) => props.theme['mobile-bp']} {
    flex-direction: column;
    margin-bottom: 2rem;
  }
`

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 40rem;

  @media ${(props) => props.theme['mobile-bp']} {
    max-width: none;
  }
`

export const RightContainer = styled.div`
  flex: 1;
`
