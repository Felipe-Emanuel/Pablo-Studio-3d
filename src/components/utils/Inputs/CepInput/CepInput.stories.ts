import { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import { CepInput } from ".";

const meta: Meta<typeof CepInput> = {
  title: "Utils/Inputs/CepInput",
  component: CepInput,
  argTypes: {
    placeholder: { type: "string" },
  },
};

export default meta;
type Story = StoryObj<typeof CepInput>;

export const cepInput: Story = {
  args: {
    placeholder: "Insira um cep",
    submit: action("Submetido!")
  },
};
