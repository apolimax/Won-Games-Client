import { Story, Meta } from '@storybook/react'

import GameInfo, { GameInfoProps } from '.'
import MockGame from './mock'

export default {
  title: 'Game/GameInfo',
  component: GameInfo,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '144rem', padding: '1.5rem', margin: 'auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: MockGame
} as Meta

export const Default: Story<GameInfoProps> = (args) => <GameInfo {...args} />
