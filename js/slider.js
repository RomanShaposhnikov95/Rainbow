let time = 3000

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    // autoplay:
    //     {
    //         delay: time,
    //         disableOnInteraction: false,
    //     },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet">
                        <div class="circle-wrap">
                            <div class="circle">
                                <div class="mask full">
                                    <div class="fill"></div>
                                </div>
                                <div class="mask half">
                                    <div class="fill"></div>
                                </div>
                                <div class="inside-circle"><div class="btn-slider"></div></div>
                            </div>
                        </div>
                    </span>`;
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

