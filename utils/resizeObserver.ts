export const createResizeObserver = (targetID, callback) => {
    const target = document.getElementById(targetID)
    const resizeObserver = new ResizeObserver((entries, observer) => {
        for (let entry of entries) {
            callback()
        }
    })
    resizeObserver.observe(target)
    return resizeObserver
}