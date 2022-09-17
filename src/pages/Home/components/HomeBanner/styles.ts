import styled from 'styled-components'
import backgroundBanner from '../../../../assets/banner-background.png'

const bannerHeight = '34rem'

export const BannerContainer = styled.div`
  height: ${bannerHeight};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;

  @media ${(props) => props.theme['mobile-bp']} {
    flex-direction: column;
    height: initial;
    margin: 1rem 0 0;
  }

  &::before {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    height: ${bannerHeight};

    background-image: url(${backgroundBanner});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
    z-index: -1;
  }

  img {
    @media ${(props) => props.theme['mobile-bp']} {
      display: none;
    }
  }
`

export const Heading = styled.div`
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme['mobile-bp']} {
    align-items: center;
  }

  h1 {
    font: 800 3rem 'Baloo 2', sans-serif;
    color: ${(props) => props.theme['gray-900']};
    line-height: 1.3;

    @media ${(props) => props.theme['mobile-bp']} {
      text-align: center;
      max-width: 32rem;
    }
  }

  p {
    font-size: 1.25rem;
    line-height: 1.3;
    margin: 1rem 0 0;
  }

  ul {
    list-style: none;
    margin: 3.75rem 0 0;

    display: grid;
    grid-template-columns: 0.75fr 1fr;
    grid-template-rows: auto;
    gap: 1.25rem;

    @media ${(props) => props.theme['mobile-bp']} {
      width: 100%;

      &:nth-child(2n) {
        text-align: right;
      }
    }
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-900',
  yellowLight: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Tag = styled.li<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  i {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${(props) => props.theme[STATUS_COLORS[props.statusColor]]};

    display: flex;
    align-items: center;
    justify-content: center;

    svg {
      color: ${(props) => props.theme.white};
    }
  }

  span {
    color: ${(props) => props.theme['gray-700']};
    flex: 1;
  }
`
