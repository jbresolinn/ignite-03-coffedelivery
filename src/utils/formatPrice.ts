export function formatPrice(price: number, includePrefix?: boolean) {
  const formatted = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    currencyDisplay: 'symbol',
  }).format(price)

  if (includePrefix) {
    return formatted
  } else {
    return formatted.replace('R$', '').trim()
  }
}
