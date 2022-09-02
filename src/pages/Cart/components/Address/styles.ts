import styled from 'styled-components'

export const AddressContainer = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font: 800 1.125rem 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-900']};
  }
`

export const AddressContent = styled.div`
  margin: 1rem 0 0;
  padding: 2.5rem;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px;

  header {
    display: flex;
    gap: 0.5rem;

    > svg {
      color: ${(props) => props.theme['yellow-900']};
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

export const AddressForm = styled.form`
  width: 100%;
  margin: 2rem 0 0;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  fieldset {
    border: 0;
    display: flex;
    align-items: center;
    gap: 0.75rem;

    > a {
      font-size: 0.875rem;
      color: ${(props) => props.theme['yellow-900']};
      text-decoration: none;
      transition: opacity 0.2s;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`
