export const fixPrice = (numPrice?: number) => {
  if (!numPrice) return;
  if (numPrice < 100) {
    return `0,${numPrice} £`;
  } else {
    const priceToSting = numPrice.toString();
    const price = priceToSting.substring(0, priceToSting.length - 2);
    const penny = priceToSting.substring(priceToSting.length - 2);
    return `${price}${penny === "00" ? "" : ", " + penny} £`;
  }
};
