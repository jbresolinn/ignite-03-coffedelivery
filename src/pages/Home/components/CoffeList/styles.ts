import styled from 'styled-components'

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

export const CoffeDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    margin: 1rem 0 0;
    font: 700 1.25rem 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    margin: 0.5rem 0 0;
    font-size: 0.875rem;
    line-height: 1.3;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`

export const CoffeCategoriesList = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    background: ${(props) => props.theme['yellow-100']};

    font: 700 0.625rem 'Roboto', sans-serif;
    line-height: 1.3;
    padding: 0.25rem 0.5rem;
    color: ${(props) => props.theme['yellow-900']};
    text-transform: uppercase;
    border-radius: 1rem;
  }
`

export const ActionsContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;

  span {
    flex: 1;
    font: 800 1.5rem 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-700']};

    &:before {
      content: 'R$';
      display: inline-block;
      font: 400 0.875rem 'Roboto', sans-serif;
      margin: 0 0.25rem 0 0;
    }
  }

  > button {
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 6px;
    border: 0;
    background: ${(props) => props.theme['purple-900']};
    transition: opacity 0.2s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }

    svg {
      color: ${(props) => props.theme.white};

      @media ${(props) => props.theme['mobile-bp']} {
        width: 1.5rem;
      }
    }
  }
`

export const NumberInput = styled.fieldset`
  background: ${(props) => props.theme['gray-400']};
  width: 4.5rem;
  height: 2.375rem;
  border-radius: 6px;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > button {
    border: 0;
    background: transparent;
    padding: 0 0.25rem;

    svg {
      color: ${(props) => props.theme['purple-500']};
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
