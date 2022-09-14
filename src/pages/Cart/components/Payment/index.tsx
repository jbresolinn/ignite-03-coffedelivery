import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import { ReactNode } from 'react'
import { RadioInput } from '../../../../components/RadioInput'
import { paymentMethods, PaymentMethodsType } from '../../../../data/payments'
import { PaymentContainer, PaymentsList } from './styles'

export function Payment() {
  function getPaymentMethodIcon(method: PaymentMethodsType): ReactNode {
    switch (method.name) {
      case 'Cartão de crédito':
        return <CreditCard size={16} />
      case 'Cartão de débito':
        return <Bank size={16} />
      case 'Dinheiro':
        return <Money size={16} />
    }
  }

  return (
    <PaymentContainer>
      <header>
        <CurrencyDollar size={22} />
        <div>
          <span>Pagamento</span>
          <small>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </small>
        </div>
      </header>

      <PaymentsList>
        {paymentMethods.map((method) => {
          return (
            <RadioInput
              key={method.id}
              id={method.id}
              name={method.name}
              value={method.id}
              atGroup={true}
              groupName="payments"
              icon={getPaymentMethodIcon(method)}
            ></RadioInput>
          )
        })}
      </PaymentsList>
    </PaymentContainer>
  )
}
