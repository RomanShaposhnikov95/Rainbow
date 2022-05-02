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
        document.getElementById("header").style.zIndex = "1002";
    } else {
        document.getElementById("header").style.padding = "33px 0 22px 0";
        document.getElementById("header").style.boxShadow = "unset";
        document.getElementById("header").style.zIndex = "1000";
    }
}

const formContainer = document.querySelectorAll('.form-container')


formContainer.forEach(el => {
    const numInput = el.querySelector('.input-number')
    const decrement = el.querySelector('.decrement')
    const increment = el.querySelector('.increment')

    const more = el.querySelector('.more')
    const alsoNeedHelp = el.querySelectorAll('.also-need-help')
    const donateSum = el.querySelector('.donateSum')

    let count = numInput.valueAsNumber ? numInput.valueAsNumber : 0
    let plusOneTh = 0

    const changeCountHTML = (count, plusOneTh) => {
        donateSum.innerHTML = count + plusOneTh
    }

    numInput.addEventListener('input', () => {
        return (
            count = numInput.valueAsNumber ? numInput.valueAsNumber : 0,
            changeCountHTML(count, plusOneTh)
        )
    })

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

})




// const more = formContainer.querySelector('.more')
// const alsoNeedHelp = formContainer.querySelectorAll('.also-need-help')
// const donateSum = formContainer.querySelector('.donateSum')
// const inputSum = formContainer.querySelector('.input-number')


// let n = 3
// let donateSumCount = 0
//
// const sortAlso = (n) => {
//     alsoNeedHelp.forEach((el, index) => {
//         if(index >= n) {
//             el.classList.add('display-none-class')
//         } else {
//             el.classList.remove('display-none-class')
//
//         }
//     })
// }
//
// sortAlso(n)
//
// more.addEventListener('click', () => {
//     n = n + 3
//     sortAlso(n)
//     more.classList.add('display-none-class')
// })
//
// alsoNeedHelp.forEach(el => {
//     el.addEventListener('click', () => {
//         el.classList.toggle('also-checked')
//         if(el.classList.contains('also-checked')) {
//             donateSumCount = donateSumCount + 1000
//         } else {
//             donateSumCount = donateSumCount - 1000
//         }
//         donateSum.innerHTML = donateSumCount
//     })
// })






