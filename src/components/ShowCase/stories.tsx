import { Story, Meta } from '@storybook/react'

import ShowCase, { ShowCaseProps } from '.'
import hightlightMock from 'components/Highlight/mock'
import gamestMock from 'components/GameCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  title: 'Most Populars',
  highlight: hightlightMock,
  games: gamestMock
}

export const WithoutHightlight: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutHightlight.args = {
  title: 'Most Populars',
  games: gamestMock
}

export const WithoutGames: Story<ShowCaseProps> = (args) => (
  <ShowCase {...args} />
)

WithoutGames.args = {
  title: 'Most Populars',
  highlight: hightlightMock
}
