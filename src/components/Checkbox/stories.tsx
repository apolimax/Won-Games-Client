import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args: CheckboxProps) => (
  <Checkbox isChecked {...args} />
)
