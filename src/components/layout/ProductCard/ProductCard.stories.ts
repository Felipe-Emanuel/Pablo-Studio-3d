import { Meta, StoryObj } from "@storybook/react";

import { ProductCard } from ".";
import { productMocked } from "@/src/mocks/productMocked";

const meta: Meta<typeof ProductCard> = {
  title: "Layout/ProductCard",
  component: ProductCard,
  argTypes: {}
}

export default meta;
type Story = StoryObj<typeof ProductCard>;

export const productCard: Story = {
    args: {
      //@ts-expect-error
    product: productMocked,
    "obs": "Por algum motivo isso funciona melhor em página ('Open canvas in new tab')"
  },
}
