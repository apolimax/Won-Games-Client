import { Story, Meta } from '@storybook/react'
import Radio, { RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio
} as Meta

export const Default: Story<RadioProps> = (args) => <Radio {...args} />
