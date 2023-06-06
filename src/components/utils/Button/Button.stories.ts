import type { Meta, StoryObj } from "@storybook/react";

import { Button } from ".";

const meta: Meta<typeof Button> = {
  title: "Utils/Button",
  component: Button,
  argTypes: {
    label: { type: 'string' },
    onClick: () => console.log('button clicked')
  }
}

export default meta;
type Story = StoryObj<typeof Button>;

export const button: Story = {
  args: {
    label: 'Acessar'
  }
}
