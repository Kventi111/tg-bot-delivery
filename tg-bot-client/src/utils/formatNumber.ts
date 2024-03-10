export function formatPrice(price) {
    let formattedPrice = price.toFixed(0);
    formattedPrice = formattedPrice.replace(/\d(?=(\d{3})+\.)/g, '$& ');
    formattedPrice += " ₽";
    
    return formattedPrice;
}
