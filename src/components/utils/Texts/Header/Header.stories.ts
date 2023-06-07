import type { Meta, StoryObj } from "@storybook/react";

import { Header } from ".";

const meta: Meta<typeof Header> = {
  title: "Utils/Texts/Header",
  component: Header,
  argTypes: {
    subtitle: {type: 'string'},
    title: {type: 'string'},
  }
}

export default meta;
type Story = StoryObj<typeof Header>;

export const header: Story = {
  args: {
    title: "Product Title",
    titleSize: "2xl",
    subtitle: "Product Collection",
    subtitleSize: "lg"
  }
}
