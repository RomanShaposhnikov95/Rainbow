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

const formContainer = document.querySelectorAll('.form-container')


let moneyCount = 0

formContainer.forEach(el => {
    const numInput = el.querySelector('.input-number')
    const decrement = el.querySelector('.decrement')
    const increment = el.querySelector('.increment')
    const getInput = el.querySelectorAll('.switch-count')

    const more = el.querySelector('.more')
    const alsoNeedHelp = el.querySelectorAll('.also-need-help')
    const donateSum = el.querySelector('.donateSum')


    let count = numInput.valueAsNumber ? numInput.valueAsNumber : 0
    let plusOneTh = 0
    let switchCount = 0

    const changeCountHTML = (count = 0, plusOneTh = 0, switchCount = 0) => {
        count = count + plusOneTh
        count = count + switchCount
        donateSum.innerHTML = count
    }

    getInput.forEach(el => {
        el.addEventListener('change', () => {
            switchCount = Number(el.value)
            changeCountHTML(count, plusOneTh, switchCount)
        })

        // if(el.value) {
        //     el.addEventListener('click', () => {
        //         console.log('second',el.value)
        //     })
        // }

    })

    numInput.addEventListener('input', () => {
        return (
            count = numInput.valueAsNumber ? numInput.valueAsNumber : 0,
            changeCountHTML(count, plusOneTh, switchCount)
        )
    })


    if(decrement && increment) {
        decrement.addEventListener('click', () => {
            count -= 1
            if(count <= 0) {
                count = 0
            }
            return (
                numInput.value = count,
                    changeCountHTML(count, plusOneTh)
            )
        })

        increment.addEventListener('click', () => {
            count += 1
            return (
                numInput.value = count,
                    changeCountHTML(count, plusOneTh)
            )
        })



        let n = 3

        const sortAlso = (n) => {
            alsoNeedHelp.forEach((el, index) => {
                if(index >= n) {
                    el.classList.add('display-none-class')
                } else {
                    el.classList.remove('display-none-class')

                }
            })
        }

        sortAlso(n)

        more.addEventListener('click', () => {
            n = n + 3
            sortAlso(n)
            more.classList.add('display-none-class')
        })

        alsoNeedHelp.forEach(el => {
            el.addEventListener('click', () => {
                el.classList.toggle('also-checked')
                if(el.classList.contains('also-checked')) {
                    plusOneTh = plusOneTh + 1000
                } else {
                    plusOneTh = plusOneTh - 1000
                }
                return changeCountHTML(count, plusOneTh)
            })
        })
    }
    
})

