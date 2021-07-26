document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5
    let platforms = []
    let upTimerId 
    let downTimerId

    function createDoodler() {
        // puts doodler inside grid 
        grid.appendChild(doodler)
        doodler.classList.add('doodler')
        doodler.style.left = doodlerLeftSpace + 'px'
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
// ========================================== //


    // constructor
    class Platform {
        constructor(newPlatBottom) {
            // each has its own bottom
            this.bottom = newPlatBottom
            // will appear in grid
            this.left = Math.random() * 315 
            this.visual = document.createElement('div')

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms() {
        for (let i = 0; i < platformCount; i++) {
            // divides by the space of plat-Count (5)
            let platGap = 600 / platformCount
            // increments the gap space
            let newPlatBottom = 100 + i * platGap
            let newPlatform = new Platform(newPlatBottom)
            platforms.push(newPlatform)
            console.log(platforms)

        }
    }

    function movePlatforms() {
        if (doodlerBottomSpace > 200) {
            platforms.forEach(platform => {
                platform.bottom -= 4
                let visual = platform.visual
                visual.style.bottom = platform.bottom + 'px'

            }) 
        }
    }
    
    function jump() {
        clearInterval(downTimerId)
        upTimerId = setInterval(function () {
            doodlerBottomSpace += 20
            doodler.style.bottom = doodlerBottomSpace + 'px'
            if (doodlerBottomSpace > 350) {
                fall()
            }
        },30)
    }


    function fall() {
        clearInterval(upTimerId)
        downTimerId = setInterval(function () {
            doodlerBottomSpace -= 5
            doodler.style.bottom = doodlerBottomSpace + 'px'
        })
    }



    // doodler appears if this function is evoked
    function start() {
        // if game is NOT over, we create doodler.
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
            setInterval(movePlatforms, 30)
            jump()

        }
    }
    // attach to button later.
    start()
})





// https://www.youtube.com/watch?v=8xPsg6yv7TU&list=RDCMUC8butISFwT-Wl7EV0hUK0BQ&index=3
// 27:16, line 80 if (doodlerBottomSpace)