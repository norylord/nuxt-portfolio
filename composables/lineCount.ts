import {ref} from "vue";
import {createResizeObserver} from "~/utils/resizeObserver";

export const countLines = (elementID) => {
    const el = document.getElementById(elementID)?.offsetHeight
    console.log(el)
    const linesCount = []
    for (let i = 1; i <= el / 20 + 1; i++) {
        linesCount.push(i)
    }
    return linesCount
}