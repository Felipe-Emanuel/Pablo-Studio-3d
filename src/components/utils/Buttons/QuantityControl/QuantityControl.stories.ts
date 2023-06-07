import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { QuantityControl } from ".";

const meta: Meta<typeof QuantityControl> = {
  title: "Utils/Button/QuantityControl",
  component: QuantityControl,
  argTypes: {
    qtd: { type: "number"},
  }
}

export default meta;
type Story = StoryObj<typeof QuantityControl>;

export const quantityControl: Story = {
  args: {
    qtd: 0,
    decrement: action("decrement"),
    increment: action("increment"),
  }
}
