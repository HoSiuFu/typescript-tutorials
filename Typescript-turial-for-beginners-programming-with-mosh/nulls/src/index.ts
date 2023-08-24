function greet(name: string | null): void {
    if (name)
        console.log(`Hola ${name}!`)
    console.log("Hola!")
}

greet(null);