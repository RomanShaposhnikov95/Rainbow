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





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
        document.getElementById("header").style.padding = "13px 0 20px 0";
        document.getElementById("header").style.boxShadow = "0 5px 10px 0 rgba(68,61,102,0.05)";
    } else {
        document.getElementById("header").style.padding = "33px 0 22px 0";
        document.getElementById("header").style.boxShadow = "unset";
    }
}


const formGroupBlock = document.querySelectorAll('.input-wrap-container')



formGroupBlock.forEach(el => {
    const numInput = el.querySelector('.input-number')
    const decrement = el.querySelector('.decrement')
    const increment = el.querySelector('.increment')

    let count = 0

    decrement.addEventListener('click', () => {
        count -= 1
        if(count <= 0) {
            count = 0
        }
        return numInput.value = count
    })

    increment.addEventListener('click', () => {
         count += 1
        return numInput.value = count
    })
})







