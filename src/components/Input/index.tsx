import { InputHTMLAttributes } from 'react'
import { BaseInput } from './styles'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  maxWidth?: string
}

export function Input({ maxWidth, ...defaultProps }: InputProps) {
  return (
    <BaseInput
      type={defaultProps.type}
      placeholder={defaultProps.placeholder}
      style={{ maxWidth }}
    />
  )
}
