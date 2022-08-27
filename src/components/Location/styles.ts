import styled from 'styled-components'

export const LocationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: ${(props) => props.theme['modal-opacity']};

  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    max-width: 32rem;
    max-height: 32rem;
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
  max-height: 17rem;
  margin: 1rem 0;
  list-style: none;
  overflow: hidden;
  overflow-y: scroll;

  li {
    font-size: 0.875rem;
    color: ${(props) => props.theme['gray-600']};
    line-height: 1.4;
    padding: 0.75rem 0.5rem;
    text-align: center;

    & + li {
      border-top: 1px solid ${(props) => props.theme['gray-400']};
    }
  }
`
