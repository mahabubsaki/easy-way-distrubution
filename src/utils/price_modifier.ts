const priceModifier = (price: number): string => {
    const [integerPart, decimalPart] = price.toFixed(2).split(".");
    const integerPartWithCommas = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return `${integerPartWithCommas}.${decimalPart}`;
};
export { priceModifier };