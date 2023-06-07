import { Price } from "../Price";
import { Text } from "../Text";

interface FinancialSummaryProps{
  field: string;
  price: string;
}

export function FinancialSummary({field = "", price = "0"}: FinancialSummaryProps) {
  return (
    <div className="py-1 px-2 border-b-[1px] border-black flex items-center justify-between w-full">
      <Text dark text={field} weigth="light" size="lg" className="text-dark/75 w-fit truncate" />
      <Price price={price} dark weigth="light" />
    </div>
  )
}
