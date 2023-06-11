export const countLines = (elementID) => {
    const el = document.getElementById(elementID)?.offsetHeight
    const linesCount = []
    for (let i = 1; i <= el / 20 + 1; i++) {
        linesCount.push(i)
    }
    return linesCount
}