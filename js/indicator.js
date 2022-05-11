window.addEventListener('load', () => {
    const block = document.querySelectorAll('.money-info')

    block.forEach(el => {
        const circle = el.querySelector('.circle')
        const full = circle.querySelector('.full')
        const fill = circle.querySelectorAll('.fill')


        let countIf = el.querySelector('.money-count-available')
        let countNeed = el.querySelector('.money-count-necessary')

        let getIf = Number(countIf.innerHTML.replace(/\s/g, ''))
        let getNeed = Number(countNeed.innerHTML.replace(/\s/g, ''))

        let result = getIf + getNeed

        let onePercent = result / 100

        let have = getIf / onePercent

        let count = 180/100 * have

        if (count > 180) {
            count = 180
        }

        full.style.transform = `rotate(${count}deg)`
        full.style.animation = "none"

        fill.forEach(el => {
            el.style.animation = "none"
            el.style.transform = `rotate(${count}deg)`
        })
    })
})

