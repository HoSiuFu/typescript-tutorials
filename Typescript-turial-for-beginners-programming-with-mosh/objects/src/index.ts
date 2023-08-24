let employee: {
    readonly id: number,
    name: string,
    fax?: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "HoSiuFu",
    retire: (date: Date): void => {
        console.log(`I retire at ${date.toUTCString()}`)
    }
}

employee.retire(new Date());