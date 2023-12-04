// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'

const meta: Meta<typeof Avatar> = {
  component: Avatar,
}

export default meta

type Story = StoryObj<typeof Avatar>

export const WithImage: Story = {
  args: {
    avatar: '/images/placeholder__avatar-01.png',
    alt: 'Amy Dutton',
  },
}

export const Letter: Story = {
  args: {
    letter: 'A',
  },
}

export const Icon: Story = {
  args: {
    icon: 'check',
  },
}

export const WithIndicator: Story = {
  args: {
    icon: 'check',
    indicator: 'success',
  },
}
