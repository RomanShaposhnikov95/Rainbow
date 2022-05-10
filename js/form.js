// const form = document.getElementById("form");
// const name = document.getElementById("name");
// const email = document.getElementById("email");
// const message = document.getElementById("message");
// const btn = document.getElementById("btn-submit");
//
//
// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     validateInputs();
//     ErrorActive()
// })
//
//
// const setError = (element) => {
//     element.classList.add('error');
// }
//
// const setSuccess = element => {
//     element.classList.remove('error');
// };
//
// const isValidEmail = email => {
//     const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return re.test(String(email).toLowerCase());
// }
//
// const validateInputs = () => {
//     const nameValue = name.value.trim();
//     const emailValue = email.value.trim();
//     const messageValue = message.value.trim();
//
//     if(nameValue === '') {
//         setError(name);
//     } else {
//         setSuccess(name);
//     }
//
//     if(emailValue === '') {
//         setError(email);
//     } else if (!isValidEmail(emailValue)) {
//         setError(email);
//     } else {
//         setSuccess(email);
//     }
//
//     if(messageValue === '') {
//         setError(message);
//     } else {
//         setSuccess(message);
//     }
// }
//
// const ErrorActive = () => {
//     if(name.classList.contains('error') || email.classList.contains('error') || message.classList.contains('error')) {
//         return (
//             btn.removeAttribute('data-bs-toggle'),
//             btn.removeAttribute('data-bs-target')
//         )
//     } else {
//         return (
//             btn.setAttribute('data-bs-toggle', 'modal'),
//             btn.setAttribute('data-bs-target', '#staticBackdrop'),
//             btn.click()
//         )
//     }
// }



const modal = document.querySelector('.modal')
const wrap = modal.querySelectorAll('.justPay')
const donateBtn = document.querySelector('.btn-donate')
const message = modal.querySelector(".title-l");
const img = modal.querySelector(".modal-img").children[0];

const form = document.querySelectorAll('.form')

form.forEach(el => {
    const btn = el.querySelector('.btn-submit')
    el.addEventListener('submit', (e) => {
        e.preventDefault()
        if(btn) {
            wrap.forEach(w => {
                w.classList.add('d-none')
                message.innerHTML = 'Выберите способ оплаты'
                img.src = 'img/ic-payment-options.svg'
            })
        }
    })
})

donateBtn.addEventListener('click', () => {
    wrap.forEach(w => {
        if(w.classList.contains('d-none')) {
            w.classList.remove('d-none')
            message.innerHTML = 'Пожертвовать'
            img.src = 'img/ic-holding-heart.svg'
        }
    })
})


let data = {}

form.forEach(el => {
    const name = el.querySelector('[name="name"]'), //получаем поле name
        otherCount = el.querySelector('[name="other-count"]'), //получаем поле age
        currency = el.querySelector('[name="currency"]'), //получаем поле plan
        email = el.querySelector('[name="email"]'), //получаем поле terms
        comment = el.querySelector('[name="comment"]'), //получаем поле terms
        check = el.querySelector('[name="check"]'); //получаем поле terms

    if (otherCount) {
        otherCount.addEventListener('input', () => {
            const switchCount = el.querySelector('[name="switch-two"]:checked')
            switchCount.checked = false
        })
    }



    el.addEventListener('submit', (e) => {
        e.preventDefault();
            const switchCount = el.querySelector('[name="switch-two"]:checked'), //получаем поле plan;
            payment = el.querySelector('[name="payment"]:checked'); //получаем поле plan;
            // let count = Number(switchCount.value) + Number(otherCount.value)


        console.log(switchCount)
        // console.log(count)


        //
        //  data = {
        //     name: name ? name.value : '',
        //     otherCount: otherCount ? otherCount.value : '',
        //     currency: currency? currency.value : '',
        //     email: email ? email.value : '',
        //     comment: comment ? comment.value : '',
        //     check: check ? check.value : false,
        //     switchCount: switchCount ? switchCount.value : '100',
        //     payment: payment ? payment.value : '',
        //     // count: count
        // };
        //

        if (name) {


            data = {
                ...data,
                name: name.value,
            }
        }
        if (otherCount) {
            data = {
                ...data,
                otherCount: otherCount.value,
            }
        }
        if (currency) {
            data = {
                ...data,
                currency: currency.value,
            }
        }
        if (email) {
            data = {
                ...data,
                email: email.value,
            }
        }
        if (comment) {
            data = {
                ...data,
                comment: comment.value,
            }
        }
        if (check) {
            data = {
                ...data,
                check: check.value,
            }
        }
        if (switchCount) {
            data = {
                ...data,
                switchCount: switchCount.value,
            }
        }

        if (payment) {
            data = {
                ...data,
                payment: payment.value,
            }
        }

        console.log(data);


    })
})

