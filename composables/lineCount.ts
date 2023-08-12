export const countLines = (elementID: string) => {
    const elementHeight = document.getElementById(elementID)?.offsetHeight
    const linesCount = []
    for (let i = 1; i <= elementHeight / 20 + 1; i++) {
        linesCount.push(i)
    }
    return linesCount
}