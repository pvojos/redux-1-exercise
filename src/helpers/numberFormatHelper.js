export const formatNumber = (number) => {
    return number.toLocaleString('es-MX', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    })
}