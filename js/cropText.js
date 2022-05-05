window.addEventListener('load', () => {
    const pdfTitle = document.querySelectorAll('.pdf-title')

    pdfTitle.forEach(el => {
        let str = el.innerHTML

        if (str.length > 19) str = str.slice(0, 19) + '...' + str.slice(-4);
        return el.innerHTML = str;
    })
})

