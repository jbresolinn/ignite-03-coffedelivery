import styled from 'styled-components'

export const LocationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;

  background: ${(props) => props.theme['modal-opacity']};

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    max-width: 32rem;
    max-height: 35rem;
    border-radius: 6px;
    padding: 2rem;

    background: ${(props) => props.theme['gray-200']};

    header {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;

      svg {
        color: ${(props) => props.theme['purple-500']};
      }

      h2 {
        font: 700 1.5rem 'Baloo 2', sans-serif;
        color: ${(props) => props.theme['gray-900']};
      }

      fieldset {
        width: 100%;
        border: 0;
        background: ${(props) => props.theme['gray-100']};
        border-radius: 6px;
        padding: 0.5rem;
        border: 2px solid transparent;
        transition: border-color 0.2s;

        display: flex;
        align-items: center;

        &:focus-within {
          border-color: ${(props) => props.theme['purple-900']};
        }

        svg {
          color: ${(props) => props.theme['purple-900']};
        }

        input {
          flex: 1;
          border: 0;
          background: transparent;
          margin: 0 0 0 0.5rem;
          font-size: 1rem;
          padding: 0.5rem;
          outline: none;
          color: ${(props) => props.theme['gray-900']};

          &::placeholder {
            color: ${(props) => props.theme['gray-600']};
          }
        }
      }
    }
  }
`
export const LocationList = styled.ul`
  width: 100%;
  height: 17rem;
  margin: 1rem 0 0;
  list-style: none;
  overflow: hidden;
  overflow-y: scroll;

  li {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.4;
    padding: 0.75rem 0.5rem;
    text-align: center;
    position: relative;
    transition: all 0.2s;
    cursor: pointer;

    & + li {
      border-top: 1px solid ${(props) => props.theme['gray-400']};
    }

    &:hover,
    &:focus {
      color: ${(props) => props.theme['purple-500']};

      &::after {
        content: '';
        display: inline-block;
        width: 0.4rem;
        height: 0.4rem;
        border-radius: 50%;
        background: ${(props) => props.theme['purple-500']};

        position: absolute;
        right: 0;
        bottom: 0;
        top: 0;
        margin: auto;
      }
    }
  }
`

export const ScrollIconContainer = styled.span`
  background: transparent;
  margin: 0.5rem 0 0;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: ${(props) => props.theme['gray-500']};
  }
`
export const CloseButton = styled.button`
  width: 1.75rem;
  height: 1.75rem;
  border-radius: 6px;
  background: transparent;
  transition: background 0.2s;
  float: right;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;

  &:hover,
  &:focus {
    background: ${(props) => props.theme['gray-300']};
  }

  svg {
    color: ${(props) => props.theme['gray-600']} !important;
  }
`
