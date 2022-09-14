import styled from 'styled-components'

export const RadioInputContainer = styled.div`
  width: 100%;
  padding: 1rem 0 1rem 1rem;
  background: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  position: relative;

  input[type='radio'] {
    opacity: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  &:has(input:checked) {
    background: ${(props) => props.theme['purple-100']};
    border-color: ${(props) => props.theme['purple-500']};
  }

  label {
    font-size: 0.75rem;
    color: ${(props) => props.theme['gray-700']};
    text-transform: uppercase;
  }

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`
