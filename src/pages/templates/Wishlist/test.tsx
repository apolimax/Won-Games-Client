import { screen } from '@testing-library/react'

import { renderWithTheme } from 'utils/tests/helper'
import hightlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

import Wishlist, { WishlistTemplateProps } from '.'

const props: WishlistTemplateProps = {
  games: gamesMock,
  recommendedHighlight: hightlightMock,
  recommendedGames: gamesMock
}

jest.mock('components/ShowCase', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ShowCase"></div>
    }
  }
})

describe('<Wishlist />', () => {
  it('should render the heading', () => {
    renderWithTheme(<Wishlist {...props} />)

    expect(
      screen.getByRole('heading', { name: /wishlist/i })
    ).toBeInTheDocument()

    expect(screen.getAllByText('Population Zero')).toHaveLength(6)

    expect(screen.getByTestId('Mock ShowCase')).toBeInTheDocument()
  })
})
