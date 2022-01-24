import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'

import CartListMock from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: CartListMock,
    total: 'R$ 200,00'
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CartListProps> = (args) => (
  <div style={{ maxWidth: 800 }}>
    <CartList {...args} />
  </div>
)
