export function formatPrice(price: number) {
    let formattedPrice = price.toFixed(1);
    formattedPrice = formattedPrice.replace(/\d(?=(\d{3})+\.)/g, '$& ');
    formattedPrice += " ₽";
    
    return formattedPrice;
}
