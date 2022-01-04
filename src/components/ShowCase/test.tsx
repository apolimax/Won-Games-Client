import { screen } from '@testing-library/react'
import 'match-media-mock'

import ShowCase from '.'
import { renderWithTheme } from 'utils/tests/helper'

import hightlightMock from 'components/Highlight/mock'
import gamestMock from 'components/GameCardSlider/mock'

const props = {
  title: 'Most Populars',
  highlight: hightlightMock,
  games: [gamestMock[0]]
}

describe('<ShowCase />', () => {
  it('should render with all the props', () => {
    renderWithTheme(<ShowCase {...props} />)
    const heading = screen.getByRole('heading', { name: /most populars/i })

    const hightLight = screen.getByRole('heading', {
      name: hightlightMock.title
    })
    expect(heading).toBeInTheDocument()
    expect(hightLight).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: gamestMock[0].title })
    ).toBeInTheDocument()
  })

  it('should render without the title', () => {
    renderWithTheme(<ShowCase highlight={hightlightMock} games={gamestMock} />)
    const heading = screen.queryByRole('heading', { name: /most populars/i })

    expect(heading).not.toBeInTheDocument()
  })

  it('should render without the Highlight', () => {
    renderWithTheme(<ShowCase title="Most Populars" games={gamestMock} />)

    const hightLight = screen.queryByRole('heading', {
      name: hightlightMock.title
    })

    expect(hightLight).not.toBeInTheDocument()
  })

  it('should render without the game card slider', () => {
    renderWithTheme(
      <ShowCase title="Most Populars" highlight={hightlightMock} />
    )

    const games = screen.queryByRole('heading', {
      name: gamestMock[0].title
    })

    expect(games).not.toBeInTheDocument()
  })
})
