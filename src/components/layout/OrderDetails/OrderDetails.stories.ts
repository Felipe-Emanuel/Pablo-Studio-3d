import { Meta, StoryObj } from "@storybook/react";

import { OrderDetails } from ".";
import { productMocked } from "@/src/mocks/productMocked";

const meta: Meta<typeof OrderDetails> = {
  title: "Layout/OrderDetails",
  component: OrderDetails,
  argTypes: {
    valueOfProducts: { type: "string" },
    freight: { type: "string" },
    total: { type: "string" }
  }
}

export default meta;
type Story = StoryObj<typeof OrderDetails>;

export const orderDetails: Story = {
    args: {
      valueOfProducts: "1500",
      freight: "15",
      total: '1515',
    },
}
