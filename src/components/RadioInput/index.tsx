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
        {...defaultProps}
        type="radio"
        name={atGroup && groupName ? groupName : defaultProps.name}
      />

      {icon}
      <label htmlFor={defaultProps.id}>{defaultProps.name}</label>
    </RadioInputContainer>
  )
}
