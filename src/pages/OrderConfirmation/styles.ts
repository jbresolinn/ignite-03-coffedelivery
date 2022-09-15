import styled from 'styled-components'

export const OrderConfirmationContainer = styled.div`
  margin: 5rem 0 0;

  header {
    h1 {
      font-family: 'Baloo 2', sans-serif;
      font-size: 2rem;
      font-weight: 900;
      color: ${(props) => props.theme['yellow-900']};
      line-height: 1.3;
    }

    span {
      font-size: 1.25rem;
      line-height: 1.3;
    }
  }

  main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }
`

export const DeliveryDetailsContainer = styled.div`
  width: 32rem;
  margin: 2.5rem 0 0;
  padding: 2.5rem;
  background: ${(props) => props.theme.white};
  border-radius: 6px 36px;
  list-style: none;

  position: relative;

  display: flex;
  flex-direction: column;
  gap: 2rem;

  &:before {
    content: '';
    position: absolute;
    inset: -1px;
    border-radius: 6px 36px;
    z-index: -1;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  li {
    display: flex;
    align-items: center;
    gap: 0.75rem;
  }
`

const ICON_COLORS = {
  purple: 'purple-500',
  yellow: 'yellow-500',
  yellowDark: 'yellow-900',
} as const

interface IconProps {
  background: keyof typeof ICON_COLORS
}

export const IconContainer = styled.i<IconProps>`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${(props) => props.theme[ICON_COLORS[props.background]]};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme.white};
  }
`

export const TextContainer = styled.div`
  span {
    line-height: 1.3;

    &:last-child {
      display: block;
    }

    > strong {
      display: inline;
    }
  }

  strong {
    display: block;
  }
`

export const IllustrationContainer = styled.div``
