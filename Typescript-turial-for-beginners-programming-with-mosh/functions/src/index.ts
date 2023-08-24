function calculateTax(income: number, taxYear: number = 2000): number {
    if (taxYear < 2000)
        return income * 1.2;

    return income * 1.3;
}

function calculateTaxOptionalParamVer2(income: number, taxYear?: number): number {
    if (taxYear || 2000 < 2000)
        return income * 1.2;

    return income * 1.3;
}


console.log(calculateTax(10_000), calculateTaxOptionalParamVer2(10_000));