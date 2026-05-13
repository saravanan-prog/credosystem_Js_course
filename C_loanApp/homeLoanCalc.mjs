export default function homeLoanEmi(principalAmt,emi){
    const interest_percentage = 8
    const inteterst_amt = principalAmt * 8 / 100

    return  (principalAmt + inteterst_amt) - emi

}   