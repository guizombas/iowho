export function formatMoneyReais( valor: number ){
    const [ inteiro, decimal ] = valor.toFixed(2).split(".")
    return `R$ ${inteiro},${decimal}`
}

export function formatDate( dateIn: Date ){
    const date = new Date( dateIn )
    date.setMinutes( dateIn.getMinutes() + dateIn.getTimezoneOffset() );
    
    const day = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate(); 
    const month = (date.getMonth()+1) < 10 ? `0${(date.getMonth()+1)}` : (date.getMonth()+1); 
    const year = date.getFullYear() < 10 ? `0${date.getFullYear()}` : date.getFullYear(); 
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

    return `${day}/${month}/${year} ${hours}:${minutes}`
}