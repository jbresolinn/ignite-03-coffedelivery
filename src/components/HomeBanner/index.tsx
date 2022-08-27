import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { BannerContainer, Heading, Tag } from './styles'

import bannerImg from '../../assets/banner.png'

export function HomeBanner() {
  return (
    <BannerContainer>
      <Heading>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>

        <ul>
          <Tag statusColor={'yellow'}>
            <i>
              <ShoppingCart size={16} weight="fill" />
            </i>
            <span>Compra simples e segura</span>
          </Tag>
          <Tag statusColor={'gray'}>
            <i>
              <Package size={16} weight="fill" />
            </i>
            <span>Embalagem mantém o café intacto</span>
          </Tag>
          <Tag statusColor={'yellowLight'}>
            <i>
              <Timer size={16} weight="fill" />
            </i>
            <span>Entrega rápida e rastreada</span>
          </Tag>
          <Tag statusColor={'purple'}>
            <i>
              <Coffee size={16} weight="fill" />
            </i>
            <span>O café chega fresquinho até você</span>
          </Tag>
        </ul>
      </Heading>
      <img src={bannerImg} alt="" />
    </BannerContainer>
  )
}
