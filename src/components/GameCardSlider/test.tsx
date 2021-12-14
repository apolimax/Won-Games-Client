import 'match-media-mock'
import { renderWithTheme } from 'utils/tests/helper'
import GameCardSlider from '.'

const items = [
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  },
  {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x141',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 215,00'
  }
]

describe('<GameCardSlider />', () => {
  it('should render correct number of slides', () => {
    const { container } = renderWithTheme(<GameCardSlider items={items} />)

    expect(container.querySelectorAll('.slick-active')).toHaveLength(2)
  })

  it('should render the left and right arrows', () => {
    const { debug } = renderWithTheme(
      <GameCardSlider items={items} arrowColor="white" />
    )
    debug()
  })
})
