import { Normalize } from "@/src/functions/Normalize";
import { InputLoading } from "@animations/InputLoading/index";
import { useCepInput } from "@hooks/useCepInput";
import { useEffect, useState } from "react";

interface InputProps {
  placeholder: string;
  submit: () => void;
}

export function CepInput({ placeholder = "", submit }: InputProps) {
  const { formatCep } = Normalize();
  const { value, setValue } = useCepInput();

  //MOCKED LOAD STATE
  const [isLoading, setIsLoading] = useState(false);

  const submitInput = () => {
    if (value.length >= 8) {
      setIsLoading(true);
      submit();

      setTimeout(() => {
        setIsLoading(false);
        setValue("");
      }, 2000);
    }
  };

  useEffect(() => submitInput(), [value]);

  return (
    <div className="relative flex items-center w-full max-w-xs">
      <input
        maxLength={9}
        className="bg-transparent ring-1 ring-black/75 placeholder:text-black/75
        font-light outline-none py-5 px-5 rounded-3xl w-full text-sm"
        placeholder={placeholder}
        type="text"
        readOnly={isLoading}
        name="cep"
        value={formatCep(value)}
        onChange={(e) => setValue(e.target.value)}
      />
      {isLoading && (
        <span className="absolute right-2" data-testid="input-loading">
          <InputLoading />
        </span>
      )}
    </div>
  );
}
