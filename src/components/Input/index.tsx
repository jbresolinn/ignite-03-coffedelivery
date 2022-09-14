/* eslint-disable react/display-name */
import { Check } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes } from 'react'
import { BaseInput, InputContainer, OptionalText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  maxWidth?: string
  optional?: boolean
  isValid?: boolean
  iconValidIsShow?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      optional = false,
      isValid = false,
      iconValidIsShow = false,
      maxWidth,
      ...defaultProps
    },
    ref,
  ) => {
    return (
      <InputContainer style={{ maxWidth }}>
        <BaseInput {...defaultProps} ref={ref} />
        {optional && <OptionalText>Opcional</OptionalText>}
        {isValid && iconValidIsShow && <Check size={22} />}
      </InputContainer>
    )
  },
)
