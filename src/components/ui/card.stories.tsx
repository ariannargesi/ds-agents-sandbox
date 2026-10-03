import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from './button'
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from './card'

const meta = {
  title: 'UI/Card',
  component: Card,
  decorators: [(Story) => <div className="w-[360px]"><Story /></div>],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: (args) => (
    <Card {...args}>
      <CardHeader>
        <CardTitle>Project settings</CardTitle>
        <CardDescription>Manage how your project behaves.</CardDescription>
        <CardAction>
          <Button variant="outline" size="sm">Edit</Button>
        </CardAction>
      </CardHeader>
      <CardFooter>
        <Button>Save changes</Button>
      </CardFooter>
    </Card>
  ),
}
