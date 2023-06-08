import { Meta, StoryObj } from "@storybook/react";

import { Favorite } from ".";

const meta: Meta<typeof Favorite> = {
  title: "Layout/Favorite",
  component: Favorite,
  argTypes: {}
}

export default meta;
type Story = StoryObj<typeof Favorite>;

export const favorite: Story = {
  args: {
    size: "medium"
  }
}
