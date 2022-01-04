import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import GameInfo from '.'

const props = {
  title: 'My Game Title',
  description: 'My game description',
  price: '210.00'
}

describe('<GameInfo />', () => {
  it('should render the game info', () => {
    const { container } = renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()
    expect(screen.getByText(props.description)).toBeInTheDocument()
    expect(screen.getByText(`$${props.price}`)).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the buttons', () => {
    renderWithTheme(<GameInfo {...props} />)

    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('button', { name: /wishlist/i })
    ).toBeInTheDocument()
  })
})
