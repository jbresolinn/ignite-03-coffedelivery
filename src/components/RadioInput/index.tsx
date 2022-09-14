import React, { InputHTMLAttributes, ReactNode } from 'react'
import { RadioInputContainer } from './styles'

interface RadioInputProps extends InputHTMLAttributes<HTMLInputElement> {
  atGroup?: boolean
  groupName?: string
  icon: ReactNode
}

export function RadioInput({
  icon,
  atGroup,
  groupName,
  ...defaultProps
}: RadioInputProps) {
  return (
    <RadioInputContainer>
      <input
        type="radio"
        name={atGroup ? groupName : defaultProps.name}
        id={defaultProps.id}
      />

      {icon}
      <label htmlFor={defaultProps.id}>{defaultProps.name}</label>
    </RadioInputContainer>
  )
}
