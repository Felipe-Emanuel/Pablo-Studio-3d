import { Meta, StoryObj } from "@storybook/react";
import { FloatCard } from ".";

const meta: Meta<typeof FloatCard> = {
  title: "Layout/FloatCard",
  component: FloatCard,
  argTypes: {
    href: { type: "string" },
    small: { type: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof FloatCard>;

export const floatCard: Story = {
  args: {
    field: {
      dimensions: { width: 1113, height: 689 },
      alt: "image 1",
      copyright: null,
      url: 'https://images.prismic.io/pablo-studio-3d/1390afc8-38bb-44f6-9b3e-f8a03fbdfabb_David+Draiman.png?auto=compress,format'
    },
    small: false,
    href: "/[uid]",
  },
};
