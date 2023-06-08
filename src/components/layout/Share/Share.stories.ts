import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { Share } from ".";
import { LinkIcon } from "@/src/icons";

const meta: Meta<typeof Share> = {
  title: "Layout/Share",
  component: Share,
  argTypes: {
    options: {
      label: { type: "string" },
      icon: { type: "function" },
      action: { type: "function" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Share>;

export const share: Story = {
  args: {
    options: [
      {
        label: "Copiar link",
        icon: LinkIcon(),
        action: action("link copiado!"),
      },
    ],
  },
};
