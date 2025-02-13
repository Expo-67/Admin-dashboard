import { Currency } from "lucide-react"

const CURRENCY_FORMATTER = new Intl.Number format("en-US",{
    Currency: "USD",
    style: "currency",
    minimumFractionDigits: 0,
})
export function formatCurrency(amount: number){
    return CURRENCY_FORMATTER.format(amount)
}

const NUMBER_FORMATTER= new Intl.NumberFormat("en-US")
 export function format
{