import { Container } from 'components/Container'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import ShowCase from 'components/ShowCase'
import Base from 'pages/templates/Base'

export type WishlistTemplateProps = {
  games?: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Wishlist = ({
  games,
  recommendedHighlight,
  recommendedGames
}: WishlistTemplateProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
    </Container>
    <ShowCase
      title="You may like these games"
      highlight={recommendedHighlight}
      games={recommendedGames}
    />
  </Base>
)

export default Wishlist
