import { Meta, StoryObj } from "@storybook/react";
import { Galery } from ".";
import { images } from "@/src/mocks/imagesMock";

const meta: Meta<typeof Galery> = {
  title: "Layout/Galery",
  component: Galery,
  args: {},
};

export default meta;
type Story = StoryObj<typeof Galery>;

export const galery: Story = {
  args: {
    images,
  },
};
