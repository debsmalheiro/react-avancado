import { Story, Meta } from '@storybook/react/types-6-0'
import { withKnobs, text } from '@storybook/addon-knobs'
import Main from './index'

export default {
  title: 'Main',
  component: Main,
  decorators: [withKnobs]
} as Meta

export const Basic: Story = () => (
  <Main
    title={text('Title', '111111111111')}
    description={text('Description', 'Description teste')}
  />
)

export const Secondary: Story = () => (
  <Main
    title={text('Title', '22222222222')}
    description={text('Description', 'Description teste')}
  />
)
