import { Meta, StoryObj } from "@storybook/react";
import { NewsInfoSkeleton } from "./NewsInfoSkeleton";

const meta: Meta<typeof NewsInfoSkeleton> = {
  title: "Skeletons/NewsInfoSkeleton",
  component: NewsInfoSkeleton,
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof NewsInfoSkeleton>;

export const newsInfoSkeleton: Story = {
  args: {
    "About": "Just a responsive skeleton to NewsInfo",
    "arg:" : "express it!"
  },
};
