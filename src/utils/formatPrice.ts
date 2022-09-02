export function formatPrice(price: number) {
  // const formatted = price.toLocaleString('pt-BR', { maximumFractionDigits: 2, style })
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  }).format(price)

  return formatted.replace('R$', '').trim()
}
