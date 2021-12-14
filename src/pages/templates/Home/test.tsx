import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helper'

import 'match-media-mock'
import Home from '.'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  banners: bannersMock,
  newGames: [gamesMock[0]],
  mostPopularHighlight: highlightMock,
  mostPopularGames: [gamesMock[0]],
  upcommingGames: [gamesMock[0]],
  upcommingHighligth: highlightMock,
  upcommingMoreGames: [gamesMock[0]],
  freeGames: [gamesMock[0]],
  freeHighligth: highlightMock
}

describe('<Home />', () => {
  it('should render the menu and footer', () => {
    renderWithTheme(<Home {...props} />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /contact us/i })
    ).toBeInTheDocument()

    // should render the headings News, Most Popular, Upcoming and Free Games
    expect(screen.getByRole('heading', { name: /news/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /most popular/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /upcoming/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /free games/i })
    ).toBeInTheDocument()

    // should render section elements
    expect(screen.getAllByText(/defy death 1/i)).toHaveLength(1) // 1 banner

    expect(screen.getAllByText(/population zero/i)).toHaveLength(5) // 5 card games (5 * 1)

    expect(screen.getAllByText(/heading 1/i)).toHaveLength(3) // 3 highlights
  })

  // it('should render the headings News, Most Popular, Upcoming and Free Games', () => {

  // })

  // it('should render section elements', () => {

  // })
})
