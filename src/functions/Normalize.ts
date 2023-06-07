export function Normalize() {

  function formatPrice(price: number | undefined | string) {
    const numericPrice = typeof price === 'string' ? parseFloat(price.replace(',', '.')) : price;
    return numericPrice?.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })
  }

  const capitalizeName = (str: string) => {
    return str
      .trim()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  };

  const hiddenText = (str: string) => {
    return str.split("").map(() => "*").join("")
  }


  return {
    formatPrice,
    capitalizeName,
    hiddenText
  }
}
