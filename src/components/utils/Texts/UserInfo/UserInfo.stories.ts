import type { Meta, StoryObj } from "@storybook/react";

import { UserInfo } from ".";

const meta: Meta<typeof UserInfo> = {
  title: "Utils/Texts/UserInfo",
  component: UserInfo,
  argTypes: {
    field: { type: "string" },
    info: { type: "string" },
    isHidden: { type: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof UserInfo>;

export const userInfo: Story = {
  args: {
    field: "Cidade",
    info: "Conselheiro Pena - MG",
    isHidden: false,
  }
}
