import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;
    gap: 12px;
  }
`
export const LocationButton = styled.button`
  width: 8.9375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-900']};
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const CartButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border-radius: 6px;
  background: ${(props) => props.theme['yellow-100']};
  transition: opacity 0.2s;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['yellow-900']};
  }

  &:hover {
    opacity: 0.9;
  }

  small {
    position: absolute;
    top: -8px;
    right: -8px;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme['yellow-900']};
    color: ${(props) => props.theme.white};
    font-size: 12px;
    font-weight: bold;
  }
`
