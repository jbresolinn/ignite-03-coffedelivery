/* eslint-disable react/display-name */
import { forwardRef, InputHTMLAttributes } from 'react'
import { BaseInput } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  maxWidth?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ maxWidth, ...defaultProps }, ref) => {
    return (
      <>
        <BaseInput {...defaultProps} style={{ maxWidth }} ref={ref} />
      </>
    )
  },
)
