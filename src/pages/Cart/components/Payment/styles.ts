import styled from 'styled-components'

export const PaymentContainer = styled.section`
  margin: 0.75rem 0 0;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  @media ${(props) => props.theme['mobile-bp']} {
    border-radius: 6px 40px;
  }

  header {
    display: flex;
    gap: 0.5rem;

    > svg {
      color: ${(props) => props.theme['purple-500']};
    }

    > div {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      span {
        line-height: 1.3;
        color: ${(props) => props.theme['gray-800']};
      }

      small {
        font-size: 0.875rem;
        line-height: 1.3;
        color: ${(props) => props.theme['gray-700']};
      }
    }
  }
`
export const PaymentsList = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin: 2rem 0 0;

  @media ${(props) => props.theme['mobile-bp']} {
    flex-direction: column;
  }
`
