let data = {};
let recipient = null;
const formPage = document.querySelector('.normal-form');
const formModal = document.querySelector('.modal-form');
const modalBtnSum = formModal.querySelector('.donateSumModal')

let count = 0
let plusOneTh = 0
let switchCount = 0

const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal',  (event) => {
    const button = event.relatedTarget;
    recipient = button.getAttribute('data-bs-whatever');

    const modalBody = exampleModal.querySelectorAll('.justPay');
    const img = document.querySelector('.modal-img').children[0];
    const message = document.querySelector('.modal-title');

    if (recipient === '@mdo') {
        modalBtnSum.innerHTML = '0'
        img.src = 'img/ic-holding-heart.svg';
        message.innerHTML = 'Пожертвовать';
        modalBody.forEach(el => {
            if(el.classList.contains('justPay-show'))
                el.classList.remove('justPay-show')
        })
    }

    if (recipient === '@fat') {
        img.src = 'img/ic-payment-options.svg';
        message.innerHTML = 'Выберите способ оплаты';
        modalBody.forEach(el => {
            el.classList.add('justPay-show')
        })

    }
})

const otherCount = formPage.querySelector('[name="other-count"]');

otherCount.addEventListener('input', (e) => {
    const switchCount = formPage.querySelector('[name="switch-two"]:checked');
    if (switchCount) {
        switchCount.checked = false;
    }

    console.log(otherCount.valueAsNumber)
    donateSumPage.innerHTML = otherCount.valueAsNumber
})


formPage.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = formPage.querySelector('[name="name"]');
    const currency = formPage.querySelector('[name="currency"]');
    const email = formPage.querySelector('[name="email"]');
    const comment = formPage.querySelector('[name="comment"]');
    const check = formPage.querySelector('[name="check"]');
    const switchCount = formPage.querySelector('[name="switch-two"]:checked');


    data = {
        name: name.value,
        currency: currency.value,
        email: email.value,
        comment: comment.value,
        check: check.value,
        otherCount: switchCount ? Number(switchCount.value) : Number(otherCount.value)
    }

    modalBtnSum.innerHTML = switchCount ? switchCount.value : otherCount.value
})

formModal.addEventListener('submit', (e) => {
    e.preventDefault();

    if (recipient === "@mdo") {
        const name = formModal.querySelector('[name="name"]');
        const currency = formModal.querySelector('[name="currency"]');
        const email = formModal.querySelector('[name="email"]');
        const comment = formModal.querySelector('[name="comment"]');
        const check = formModal.querySelector('[name="check"]');
        const otherCount = formModal.querySelector('[name="other-count"]');

        data = {
            name: name.value,
            currency: currency.value,
            email: email.value,
            comment: comment.value,
            check: check.value,
            otherCount: Number(otherCount.value) + plusOneTh,
        }
    }

    const switchBank = formModal.querySelector('[name="payment"]:checked');
    data = {
        ...data,
        switchBank: switchBank.value
    }

    console.log(data);
})

const open = document.querySelector('.open-bank');
const req = document.querySelectorAll('.req');

req.forEach((el, index) => {
    el.addEventListener('input', (e) => {
        if (req[0].value.trim() !== '' && req[1].value.trim()  !== '' && req[2].value.trim()  !== '') {
            open.setAttribute("data-bs-toggle", "modal");
        } else {
            open.removeAttribute("data-bs-toggle");
        }
    })
})



const donateSumPage = document.querySelector('.donateSumPage');



const changePageCountHTML = ( count = 0, switchCount = 0) => {
    count = count + switchCount
    donateSumPage.innerHTML = count
}

const changeModalCountHTML = (count = 0, plusOneTh = 0) => {
    count = count + plusOneTh
    modalBtnSum.innerHTML = count
}

const getInput = document.querySelectorAll('.switch-count')
const increment = formModal.querySelector('.increment')
const decrement = formModal.querySelector('.decrement')
const numInput = formModal.querySelector('.input-number')
const numInputPage = formPage.querySelector('.input-number')

getInput.forEach(el => {
    el.addEventListener('change', () => {
        switchCount = Number(el.value)
        // numInputPage.valueAsNumber = 0
        changePageCountHTML(0, switchCount)
    })
})


numInput.addEventListener('input', (e) => {
    return (
        count = numInput.valueAsNumber,
        changeModalCountHTML(count, plusOneTh)
    )
})

if(decrement && increment) {
    decrement.addEventListener('click', () => {
        count -= 1
        if (count <= 0) {
            count = 0
        }
        return (
            numInput.value = count,
            changeModalCountHTML(count, plusOneTh)
        )
    })

    increment.addEventListener('click', () => {
        count += 1
        return (
            numInput.value = count,
                changeModalCountHTML(count, plusOneTh)
        )
    })
}

const alsoNeedHelp = formModal.querySelectorAll('.also-need-help')
const more = formModal.querySelector('.more')

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
        return changeModalCountHTML(count, plusOneTh)
    })
})

