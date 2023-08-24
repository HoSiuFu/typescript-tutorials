type Retire = (date: Date) => void

type Employee = {
    readonly id: number,
    name: string,
    fax?: string,
    retire: Retire,
}

let employee: Employee = {
    id: 1,
    name: "HoSiuFu",
    retire: (date: Date): void => {
        console.log(`I retire at ${date.toUTCString()}`)
    }
}

employee.retire(new Date());