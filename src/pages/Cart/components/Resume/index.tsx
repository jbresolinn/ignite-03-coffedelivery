import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'

import { CartContext, CartProduct } from '../../../../contexts/CartContext'
import { OrderContext } from '../../../../contexts/OrderContext'
import { PaymentContext } from '../../../../contexts/PaymentContext'
import { ShippingAddressContext } from '../../../../contexts/ShippingAddressContext'
import { formatPrice } from '../../../../utils/formatPrice'
import {
  ConfirmOrderButton,
  NumberInput,
  PriceResume,
  ProductDetail,
  ProductDetailActions,
  ProductList,
  ProductPrice,
  RemoveButton,
  ResumeContainer,
  ResumeContent,
} from './styles'

export function Resume() {
  const {
    totalAmount,
    cartProducts,
    updatedQuantityCart,
    removeProduct,
    deliveryPrice,
  } = useContext(CartContext)

  const { selectPayment } = useContext(PaymentContext)

  const { shippingAddress } = useContext(ShippingAddressContext)

  const { createOrder } = useContext(OrderContext)

  function handleDecrementQuantity(product: CartProduct) {
    updatedQuantityCart(product.id, product.quantity - 1)
  }

  function handleIncrementQuantity(product: CartProduct) {
    updatedQuantityCart(product.id, product.quantity + 1)
  }

  function handleRemoveProduct(product: CartProduct) {
    removeProduct(product.id)
  }

  function handleCreateNewOrder() {
    const newOrder = {
      shippingAddress,
      payment: selectPayment,
      deliveryTime: '20min - 30min',
    }

    createOrder(newOrder)
  }

  const confirmOrderButtonDisabled =
    !shippingAddress || !shippingAddress.number || !selectPayment

  return (
    <ResumeContainer>
      <h2>Cafés selecionados</h2>

      <ResumeContent>
        <ProductList>
          {cartProducts.map((product) => {
            return (
              <li key={product.id}>
                <img
                  src={`./images/coffes/${product.imageUrl}`}
                  alt={product.name}
                />

                <ProductDetail>
                  <span>{product.name}</span>

                  <ProductDetailActions>
                    <NumberInput>
                      <button
                        type="button"
                        onClick={() => handleDecrementQuantity(product)}
                        disabled={product.quantity === 1}
                      >
                        <Minus size={14} />
                      </button>

                      <input
                        type="number"
                        min={1}
                        max={10}
                        value={product.quantity}
                        disabled
                      />

                      <button
                        type="button"
                        onClick={() => handleIncrementQuantity(product)}
                        disabled={product.quantity >= 10}
                      >
                        <Plus size={14} />
                      </button>
                    </NumberInput>

                    <RemoveButton onClick={() => handleRemoveProduct(product)}>
                      <Trash size={16} />
                      <span>Remover</span>
                    </RemoveButton>
                  </ProductDetailActions>
                </ProductDetail>

                <ProductPrice>
                  <strong>
                    {formatPrice(product.price * product.quantity, true)}
                  </strong>
                </ProductPrice>
              </li>
            )
          })}
        </ProductList>

        <PriceResume>
          <li>
            <span>Total de itens</span>
            <span>{formatPrice(totalAmount, true)}</span>
          </li>
          <li>
            <span>Entrega</span>
            <span>{formatPrice(deliveryPrice, true)}</span>
          </li>
          <li>
            <strong>Total de itens</strong>
            <strong>{formatPrice(totalAmount + deliveryPrice, true)}</strong>
          </li>
        </PriceResume>

        <ConfirmOrderButton
          disabled={confirmOrderButtonDisabled}
          onClick={handleCreateNewOrder}
        >
          Confirmar pedido
        </ConfirmOrderButton>
      </ResumeContent>
    </ResumeContainer>
  )
}
