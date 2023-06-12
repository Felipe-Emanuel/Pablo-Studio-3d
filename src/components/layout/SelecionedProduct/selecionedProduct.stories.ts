import { Meta, StoryObj } from "@storybook/react";
import { SelecionedProduct } from ".";
import { images } from "@/src/mocks/imagesMock";
import { selecionedProductMock } from "@/src/mocks/selecionedProductMock";

const meta: Meta<typeof SelecionedProduct> = {
  title: "Layout/SelecionedProduct",
  component: SelecionedProduct,
  args: {},
};

export default meta;
type Story = StoryObj<typeof SelecionedProduct>;

export const selecionedProduct: Story = {
  args: {
    images,
    // @ts-expect-error: Mock não corresponde 100% a tipagem complexa do CMS
    product: selecionedProductMock
  },
};
