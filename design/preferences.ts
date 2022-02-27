//types
export type TText = 
    "Emprestar" | "Pegar Emprestado" | "Pessoas" |
    "vc o deve" | "deve vc" | "te emprestou" | "você emprestou"
    ;
export type TLang = "pt" | "en";
export type TCurrency = "real" | "dolar" | "euro"
export type TDateFormat = "normal" |  "eua"

// variaveis
export const textWithLang: Record<TText, Record<TLang, string>> = {
    "Emprestar": {
        "en": "Lend",
        "pt": "Emprestar"
    },
    "Pegar Emprestado": {
        "en": "Borrow",
        "pt": "Pegar Emprestado"
    },
    "Pessoas": {
        "en": "People",
        "pt": "Pessoas"
    },
    "deve vc": {
        "en": "owes you",
        "pt": "te deve"
    },
    "vc o deve": {
        "en": "you owe",
        "pt": "você o deve"
    },
    "te emprestou": {
        "en": "lent you",
        "pt": "te emprestou"
    },
    "você emprestou": {
        "en": "You lent",
        "pt": "você emprestou"
    }
}
export const currencySymbols: Record<TCurrency, string> = {
    "real": "R$",
    "dolar": "$",
    "euro": "€"
}