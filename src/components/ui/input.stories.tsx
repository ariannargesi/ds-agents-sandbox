import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from './input'

const meta = {
  title: 'UI/Input',
  component: Input,
  args: { placeholder: 'Type something…' },
  argTypes: {
    type: { control: 'select', options: ['text', 'email', 'password', 'number', 'file'] },
    disabled: { control: 'boolean' },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
export const Email: Story = { args: { type: 'email', placeholder: 'you@example.com' } }
export const Password: Story = { args: { type: 'password', placeholder: 'Password' } }
export const Disabled: Story = { args: { disabled: true } }
export const Invalid: Story = { args: { 'aria-invalid': true, defaultValue: 'not-an-email' } }
