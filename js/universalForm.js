let data = {};
let recipient = null;
const formPage = document.querySelector('.normal-form');
const formModal = document.querySelector('.modal-form');
const formPageTwo = document.querySelector('.normal-form-two');
const donateSumModal = document.querySelector('.donateSumModal');
const allInput = document.querySelectorAll('.reqInput');

const exampleModal = document.getElementById('exampleModal');
exampleModal.addEventListener('show.bs.modal',  (event) => {
    const button = event.relatedTarget;
    recipient = button.getAttribute('data-bs-whatever');

    const modalBody = exampleModal.querySelectorAll('.justPay');
    const img = document.querySelector('.modal-img').children[0];
    const message = document.querySelector('.modal-title');

    if (recipient === '@mdo') {
        donateSumModal.innerHTML = '0'
        img.src = 'img/ic-holding-heart.svg';
        message.innerHTML = 'Пожертвовать';
        modalBody.forEach(el => {
            if(el.classList.contains('justPay-show'))
                el.classList.remove('justPay-show')
        })
        allInput.forEach(el => {
            el.required = true
        })
    }

    if (recipient === '@fat') {
        img.src = 'img/ic-payment-options.svg';
        message.innerHTML = 'Выберите способ оплаты';
        modalBody.forEach(el => {
            el.classList.add('justPay-show')
        })
        allInput.forEach(el => {
            el.required = false
        })
    }
})


if (formPage) {
    const otherCount = formPage.querySelector('[name="other-count"]');

    otherCount.addEventListener('input', (e) => {
        const switchCount = formPage.querySelector('[name="switch-two"]:checked');
        if (switchCount) {
            switchCount.checked = false;
        }
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
            otherCount: switchCount ? Number(switchCount.value) : Number(otherCount.value),  // money-sum
        }
        donateSumModal.innerHTML = switchCount ? Number(switchCount.value) : Number(otherCount.value);
    })
}

if (formPageTwo) {
    let plusOneTh = 0
    const alsoNeed = formPageTwo.querySelectorAll('.also-need-help');

    alsoNeed.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('also-checked');
            if (el.classList.contains('also-checked')) {
                plusOneTh = plusOneTh + 1000
            } else {
                plusOneTh = plusOneTh - 1000
            }
        })
    })

    formPageTwo.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = formPageTwo.querySelector('[name="name"]');
        const currency = formPageTwo.querySelector('[name="currency"]');
        const email = formPageTwo.querySelector('[name="email"]');
        const comment = formPageTwo.querySelector('[name="comment"]');
        const check = formPageTwo.querySelector('[name="check"]');
        const otherCount = formPageTwo.querySelector('[name="other-count"]');


        data = {
            name: name.value,
            currency: currency.value,
            email: email.value,
            comment: comment.value,
            check: check.value,
            otherCount: Number(otherCount.value) + plusOneTh,  // money-sum
        }

        donateSumModal.innerHTML = Number(otherCount.value) + plusOneTh;
    })
}

if (formModal) {
    let plusOneTh = 0
    const alsoNeed = formModal.querySelectorAll('.also-need-help');

    alsoNeed.forEach(el => {
        el.addEventListener('click', () => {
            el.classList.toggle('also-checked')
            if (el.classList.contains('also-checked')) {
                plusOneTh = plusOneTh + 1000
            } else {
                plusOneTh = plusOneTh - 1000
            }
        })
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
                otherCount: Number(otherCount.value) + plusOneTh, // money-sum
            }
        }

        const switchBank = formModal.querySelector('[name="payment"]:checked');
        data = {
            ...data,
            switchBank: switchBank.value
        }

        console.log(data); // form data result!!!!!!!!!!!
    })
}

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




const formContainer = document.querySelectorAll('.form-container');


formContainer.forEach(el => {
    const alsoNeedHelp = el.querySelectorAll('.also-need-help')
    const more = el.querySelector('.more')
    const increment = el.querySelector('.increment')
    const decrement = el.querySelector('.decrement')
    const numInput = el.querySelector('.input-number')
    const getInput = el.querySelectorAll('.switch-count')
    const btnText = el.querySelector('.donateSum')

    let n = 3
    let count = 0
    let switchCount = 0
    let plusOneTh = 0

    if (alsoNeedHelp && more) {
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
                if (el.classList.contains('also-checked')) {
                    plusOneTh = plusOneTh + 1000
                } else {
                    plusOneTh = plusOneTh - 1000
                }
                changeBtnHTML(count, switchCount, plusOneTh)
            })
        })
    }

    const changeBtnHTML = ( count = 0, switchCount = 0, plusOneTh = 0) => {
        // console.log('count:', count);
        // console.log('switchCount:', switchCount);
        // console.log('plusOneTh:', plusOneTh);

        if(switchCount > 0) {
            numInput.value = 0
        }

        count = switchCount > 0 ? switchCount : count + plusOneTh

        btnText.innerHTML = count
    }


   if (getInput) {
       getInput.forEach(el => {
           el.addEventListener('change', () => {
               switchCount = Number(el.value)
               changeBtnHTML(0, switchCount, 0)
           })

           if(el.checked) {
               btnText.innerHTML = Number(el.value)
           }
       })
   }

    numInput.addEventListener('input', (e) => {
        return (
            count = numInput.valueAsNumber,
                changeBtnHTML(count, 0, plusOneTh)
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
                    changeBtnHTML(count, 0, plusOneTh)
            )
        })

        increment.addEventListener('click', () => {
            count += 1
            return (
                numInput.value = count,
                    changeBtnHTML(count, 0, plusOneTh)
            )
        })
    }
})




