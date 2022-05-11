let data = {};
let recipient = null;
const formPage = document.querySelector('.normal-form');
const formModal = document.querySelector('.modal-form');
const modalBtnSum = formModal.querySelector('.donateSum')

let count = 0
let plusOneTh = 0

const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal',  (event) => {
    const button = event.relatedTarget;
    recipient = button.getAttribute('data-bs-whatever');

    const modalBody = exampleModal.querySelectorAll('.justPay');
    const img = document.querySelector('.modal-img').children[0];
    const message = document.querySelector('.modal-title');

    if (recipient === '@mdo') {
        modalBtnSum.innerHTML = '0'
        plusOneTh = 0
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

formPage.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = formPage.querySelector('[name="name"]');
    const currency = formPage.querySelector('[name="currency"]');
    const email = formPage.querySelector('[name="email"]');
    const comment = formPage.querySelector('[name="comment"]');
    const check = formPage.querySelector('[name="check"]');
    const otherCount = formPage.querySelector('[name="other-count"]');

    data = {
        name: name.value,
        currency: currency.value,
        email: email.value,
        comment: comment.value,
        check: check.value,
        otherCount: Number(otherCount.value) + plusOneTh
    }

    modalBtnSum.innerHTML = Number(otherCount.value) + plusOneTh
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

const formContainer = document.querySelectorAll('.form-container')

formContainer.forEach(el => {
    const numInput = el.querySelector('.input-number')
    const decrement = el.querySelector('.decrement')
    const increment = el.querySelector('.increment')
    const more = el.querySelector('.more')
    const alsoNeedHelp = el.querySelectorAll('.also-need-help')
    const donateSum = el.querySelector('.donateSum')

    const changeCountHTML = (count = 0, plusOneTh = 0) => {
        count = count + plusOneTh
        donateSum.innerHTML = count
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
        numInput.value = count,
        changeCountHTML(count, plusOneTh)
    })

    increment.addEventListener('click', () => {
        count += 1

            numInput.value = count,
                changeCountHTML(count, plusOneTh)

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
                changeCountHTML(count, plusOneTh)
            })
        })
})



