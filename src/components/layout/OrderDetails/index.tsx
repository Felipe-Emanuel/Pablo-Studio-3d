import { Button } from "../../utils/Buttons/Button";
import { FinancialSummary } from "../../utils/Texts/FinancialSummary";
import { Title } from "../../utils/Texts/Title";

interface OrderDetailsProps {
  valueOfProducts: string;
  freight: string;
  total: string;
}

export function OrderDetails({
  valueOfProducts = "0",
  freight = "0",
  total = "0",
}: OrderDetailsProps) {
  return (
    <div className="w-full h-fit p-2 base:p-9 flex flex-col gap-3 lg:gap-9 bg-white/95 shadow-easy rounded-md base:rounded-3xl">
      <Title title="Detalhes do Pedido" as="h3" dark size="lg" />

      <div className="flex flex-col gap-4">
        <FinancialSummary field="Valor dos Produtos" price={valueOfProducts} />
        <FinancialSummary field="Frete" price={freight} />
        <FinancialSummary field="Total" price={total} />
      </div>

      <Button variant="dark" label="Continuar Pagamento" labelSize="xs" />
    </div>
  );
}
