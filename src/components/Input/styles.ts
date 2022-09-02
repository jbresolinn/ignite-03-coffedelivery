import styled from 'styled-components'

export const BaseInput = styled.input`
  width: 100%;
  background: ${(props) => props.theme['gray-300']};
  border: 1px solid ${(props) => props.theme['gray-400']};
  border-radius: 4px;
  padding: 0.75rem;
  outline-color: ${(props) => props.theme['yellow-900']};
  font-size: 0.875rem;
  line-height: 1.3;
  color: ${(props) => props.theme['gray-700']};

  &::placeholder {
    color: ${(props) => props.theme['gray-600']};
  }
`
