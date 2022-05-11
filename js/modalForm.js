let data = {};
let recipient = null;
const formModal = document.querySelector('.modal-form');
const modalBtnSum = formModal.querySelector('.donateSumModal')

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
        img.src = 'img/ic-holding-heart.svg';
        message.innerHTML = 'Пожертвовать';
        modalBody.forEach(el => {
            if(el.classList.contains('justPay-show'))
                el.classList.remove('justPay-show')
        })
    }

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


const changeModalCountHTML = (count = 0, plusOneTh = 0) => {
    count = count + plusOneTh
    modalBtnSum.innerHTML = count
}

const getInput = document.querySelectorAll('.switch-count')
const increment = formModal.querySelector('.increment')
const decrement = formModal.querySelector('.decrement')
const numInput = formModal.querySelector('.input-number')



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

