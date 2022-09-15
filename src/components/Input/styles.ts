import styled from 'styled-components'

export const InputContainer = styled.div`
  width: 100%;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  padding: 0.75rem;

  display: flex;
  align-items: center;
  gap: 0.5rem;

  position: relative;

  > svg {
    background: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    padding: 0.2rem;
    border-radius: 50%;
    position: absolute;
    right: -0.5rem;
  }

  &:focus-within {
    border: 1px solid ${(props) => props.theme['yellow-500']};
  }
`

export const BaseInput = styled.input`
  width: 100%;
  border: 0;
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};
  background: transparent;
  transition: opacity 0.2s;
  outline: none;

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }

  &:disabled {
    opacity: 0.5;
  }
`
export const OptionalText = styled.span`
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['gray-600']};
`
export const Loader = styled.div``
