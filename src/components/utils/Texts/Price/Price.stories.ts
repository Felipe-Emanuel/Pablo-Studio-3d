import type { Meta, StoryObj } from "@storybook/react";

import { Price } from ".";

const meta: Meta<typeof Price> = {
  title: "Utils/Texts/Price",
  component: Price,
  argTypes: {
    border: { type: "boolean" },
    dark: { type: "boolean" },
    price: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof Price>;

export const price: Story = {
  args: {
    border: false,
    dark: false,
    price: "149,99",
    size: "lg",
    weigth: "bold"
  }
}
