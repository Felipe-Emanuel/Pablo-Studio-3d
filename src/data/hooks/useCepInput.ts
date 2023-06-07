import { useState } from "react";

export const useCepInput = () => {
  const [value, setValue] = useState("")

  return {
    setValue,
    value,
  }
}
