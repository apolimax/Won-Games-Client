import { Story, Meta } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import Button from '.'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      type: 'string'
    },
    icon: {
      type: ''
    }
  }
} as Meta

export const Default: Story = (args) => <Button {...args} />

Default.args = {
  children: 'Buy Now',
  size: 'medium'
}

export const withIcon: Story = (args) => <Button {...args} />

withIcon.args = {
  children: 'Buy Now',
  size: 'small',
  icon: <AddShoppingCart />
}
