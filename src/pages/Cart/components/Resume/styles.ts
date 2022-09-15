import styled from 'styled-components'

export const ResumeContainer = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    font: bold 1.125rem 'Baloo 2', sans-serif;
    line-height: 1.3;
    color: ${(props) => props.theme['gray-800']};
  }
`

export const ResumeContent = styled.div`
  margin: 0.9375rem 0 0;
  background: ${(props) => props.theme['gray-200']};
  border-radius: 6px 44px;
  padding: 2.5rem;
`

export const ProductList = styled.ul`
  list-style: none;

  display: flex;
  flex-direction: column;

  li {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    padding: 1.5rem 0;

    img {
      width: 4rem;
      height: 4rem;
    }

    & + li {
      border-top: 1px solid ${(props) => props.theme['gray-400']};
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
`

export const ProductDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > span {
    line-height: 1.3;
  }
`

export const ProductDetailActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`

export const NumberInput = styled.fieldset`
  background: ${(props) => props.theme['gray-400']};
  width: 4.5rem;
  height: 2rem;
  border-radius: 6px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    border: 0;
    background: transparent;
    padding: 0 0.25rem;
    transition: opacity 0.2s;

    svg {
      color: ${(props) => props.theme['purple-500']};
      transition: color 0.2s;
    }

    &:disabled {
      opacity: 0.4;
    }

    &:not(:disabled):hover svg {
      color: ${(props) => props.theme['purple-900']};
    }
  }

  input[type='number'] {
    -webkit-appearance: textfield;
    -moz-appearance: textfield;
    appearance: textfield;
    outline: 0;

    flex: 1;
    background: transparent;
    border: 0;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.3;
    text-align: center;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`

export const RemoveButton = styled.button`
  height: 2rem;
  background: ${(props) => props.theme['gray-400']};
  padding: 0 0.5rem;
  border-radius: 6px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  span {
    text-transform: uppercase;
    color: ${(props) => props.theme['gray-700']};
    font-size: 0.75rem;
  }

  &:hover {
    background: ${(props) => props.theme['gray-500']};
  }
`

export const ProductPrice = styled.div`
  align-self: flex-start;
`

export const PriceResume = styled.ul`
  list-style: none;
  margin: 1.5rem 0 0;
  padding: 1.5rem 0 0;
  border-top: 1px solid ${(props) => props.theme['gray-400']};

  li {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & + li {
      margin: 0.75rem 0 0;
    }

    span {
      color: ${(props) => props.theme['gray-700']};
      font-size: 0.875rem;
      line-height: 1.3;

      &:last-child {
        font-size: 1rem;
      }
    }

    strong {
      font-size: 1.25rem;
      line-height: 1.3;
      color: ${(props) => props.theme['gray-800']};
    }
  }
`
export const ConfirmOrderButton = styled.button`
  margin: 1.5rem 0 0;
  width: 100%;
  height: 2.875rem;
  background: ${(props) => props.theme['yellow-500']};
  color: ${(props) => props.theme.white};
  font-size: 0.875rem;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 6px;
  transition: background 0.2s;

  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-900']};
  }

  &:disabled {
    background: ${(props) => props.theme['gray-400']};
  }
`
