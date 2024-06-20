

const container = document.querySelector("container")


const createGrid = (amntOfGrids) => {
    for (let i=0; i < amntOfGrids; i++) {
        const row = document.createElement('div')
        row.classList.add("grid-row")
        
        for (let j = 0; J <amntOfGrids; j++) {
            const widthAndHeight = 960 / sizeOfGrid
            const gridBox = document.createElement('div')
            gridBox.classList.add('grid-box')
            gridBox.style.width = `$(widthAndHeight)px`
            gridBox.style.height = `$(widthAndHeight)px`
            row.appendChild(gridBox)
        }
        container.appendChild(row)
    }
}

createGrid(sizeOfGrid)