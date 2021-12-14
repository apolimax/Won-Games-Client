import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameCard from '.'

const props = {
  title: 'title',
  developer: 'developer',
  img: 'img',
  price: 'R$ 235'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    const title = screen.getByText(props.title)
    const developer = screen.getByText(props.developer)
    const price = screen.getByText(props.price)
    const img = screen.getByRole('img', { name: /title/i })
    const wishListHeart = screen.getByLabelText(/add to wishlist/i)

    expect(title).toBeInTheDocument()
    expect(developer).toBeInTheDocument()
    expect(img).toHaveAttribute('src', props.img)
    expect(price).toBeInTheDocument()
    expect(wishListHeart).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza componente
    renderWithTheme(<GameCard {...props} />)

    const priceTag = screen.getByText(props.price)

    // preço não tenha line through
    expect(priceTag).not.toHaveStyle({ textDecoration: 'line-through' })
    // preço tenha background secundário
    expect(priceTag).toHaveStyle({ backgroundColor: '#3CD3C1' })
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza componente com promotional price
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)
    const defaultPrice = screen.getByText(props.price)
    const promotionalPrice = screen.getByText('R$ 200,00')

    // preço tenha line through
    expect(defaultPrice).toHaveStyle({ textDecoration: 'line-through' })
    // preço promocional não tenha line-through
    expect(promotionalPrice).not.toHaveStyle({ textDecoration: 'line-through' })
  })

  it('should render a filled favorite icon heart when favorite is true', () => {
    renderWithTheme(<GameCard {...props} favorite />)

    expect(screen.getByLabelText(/remove from wishlist/i)).toBeInTheDocument()
  })

  it('should call a function when fav button is clicked', () => {
    const onFav = jest.fn()
    renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

    fireEvent.click(screen.getAllByRole('button')[0]) // primeiro botão é FavButton

    expect(onFav).toBeCalled()
  })

  it('should render a ribbon', () => {
    renderWithTheme(
      <GameCard
        {...props}
        ribbon="20% OFF"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )

    const ribbon = screen.getByText(/20% off/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
