export function moneyMask( textValue: string ){

    let [ inteiro, decimal ] = textValue.replace(/[^,|\d]/gm, "").split(",");

    if (decimal.length > 2)
        [ inteiro, decimal ] = [ `${inteiro}${decimal.slice(0,-2)}`, `${decimal.slice(-2)}` ];
    else if (decimal.length < 2)
        [ inteiro, decimal ] = [ `${inteiro.slice(0,-1) ?? "0"}`, `${inteiro.slice(-1)}${decimal}` ];

    if (inteiro.length > 6)
        [ inteiro, decimal ] = [ inteiro.slice( 0, -1 ),  `${inteiro.slice(-1)}${decimal.slice( 0, 1 )}`]

    return Number(inteiro) + (0.01 * Number(decimal));
}