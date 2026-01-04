const testBtn = document.querySelector('#start-test')
const forDisplay = document.querySelector('#for-time')
const foreachDisplay = document.querySelector('#foreach-time')

const testApp = {
    data: Array.from({ length: 1000000 }, (_, i) => i),

    runTest() {
        const startFor = performance.now()
        const arr1 = []
        for (let i = 0; i < this.data.length; i++) {
            arr1.push(this.data[i] * 2)
        }
        const endFor = performance.now()
        forDisplay.textContent = `${(endFor - startFor).toFixed(4)} ms`

        const startEach = performance.now()
        const arr2 = []
        this.data.forEach(num => {
            arr2.push(num * 2)
        })
        const endEach = performance.now()
        foreachDisplay.textContent = `${(endEach - startEach).toFixed(4)} ms`
    }
}

testBtn.addEventListener('click', () => testApp.runTest())