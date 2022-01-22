import Wishlist, { WishlistTemplateProps } from '../pages/templates/Wishlist'

import hightlightMock from 'components/Highlight/mock'
import gamesMock from 'components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedHighlight: hightlightMock,
      recommendedGames: gamesMock
    }
  }
}
