import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameItem, { GameItemProps, PaymentInfoProps } from '.'

const props: GameItemProps = {
  img: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red Dead Redemption 2',
  price: 'R$ 215,00'
}

describe('<GameItem />', () => {
  it('should render the item', () => {
    renderWithTheme(<GameItem {...props} />)

    // image
    expect(screen.getByRole('image', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )

    // title
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // price
    expect(screen.getByText(props.price)).toBeInTheDocument()
  })

  it('should render the item with download link', () => {
    const link = 'https://link.com'

    renderWithTheme(<GameItem {...props} downloadLink={link} />)

    expect(
      screen.getByRole('link', { name: `Get ${props.title} here` })
    ).toHaveAttribute('href', link)
  })

  it('should render payment info', () => {
    const paymentInfo: PaymentInfoProps = {
      flag: 'mastercard',
      img: '/img/master-card.png',
      number: '**** **** **** 4326',
      purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
    }

    renderWithTheme(<GameItem {...props} paymentInfo={paymentInfo} />)

    expect(screen.getByRole('img', { name: paymentInfo.flag })).toHaveAttribute(
      'src',
      paymentInfo.img
    )

    expect(screen.getByText(paymentInfo.number)).toBeInTheDocument()
    expect(screen.getByText(paymentInfo.purchaseDate)).toBeInTheDocument()
  })
})
