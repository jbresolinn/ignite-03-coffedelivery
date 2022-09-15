/* eslint-disable react/display-name */
import { Check } from 'phosphor-react'
import { forwardRef, InputHTMLAttributes, useContext } from 'react'
import { TailSpin } from 'react-loader-spinner'
import { ThemeContext } from 'styled-components'
import { BaseInput, InputContainer, Loader, OptionalText } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  maxWidth?: string
  optional?: boolean
  isValid?: boolean
  iconValidIsShow?: boolean
  isLoading?: boolean
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      optional = false,
      isValid = false,
      iconValidIsShow = false,
      isLoading = false,
      maxWidth,
      ...defaultProps
    },
    ref,
  ) => {
    const { loader } = useContext(ThemeContext)

    return (
      <InputContainer style={{ maxWidth }}>
        <BaseInput {...defaultProps} ref={ref} />
        {optional && <OptionalText>Opcional</OptionalText>}
        {isValid && iconValidIsShow && <Check size={22} />}

        {isLoading && (
          <Loader>
            <TailSpin width={24} height={24} color={loader} />
          </Loader>
        )}
      </InputContainer>
    )
  },
)
