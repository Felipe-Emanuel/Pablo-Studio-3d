import { Meta, StoryObj } from "@storybook/react";
import { LoginButton } from ".";

const meta: Meta<typeof LoginButton> = {
  title: "Utils/Buttons/LoginButton",
  component: LoginButton,
  args: {
    reverse: true,
    method: "Google",
    isLoading: false,
  },
};

export default meta;
type Story = StoryObj<typeof LoginButton>;

export const loginButton: Story = {
  args: {},
};
