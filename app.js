document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false

    function createDoodler() {
        // puts doodler inside grid 
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
// ========================================== //
// left off here, 12:11 (line 18)
// https://www.youtube.com/watch?v=8xPsg6yv7TU&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=3
    function createPlatforms() {}
    
    // doodler appears if this function is evoked
    function start() {
        // if game is NOT over, we create doodler.
        if (!isGameOver) {
            createDoodler()
            createPlatforms()

        }
    }
    // attach to button later.
    start()
})