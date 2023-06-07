import { Meta, StoryObj } from "@storybook/react";

import { FinancialSummary } from ".";

const meta: Meta<typeof FinancialSummary> = {
  title: "Utils/Texts/FinancialSummary",
  component: FinancialSummary,
  argTypes: {
    field: { type: "string" },
    price: { type: "string" }
  }
}

export default meta;
type Story = StoryObj<typeof FinancialSummary>;

export const financialSummary: Story = {
  args: {
    field: "Valor dos Produtos",
    price: "2500"
  }
}
