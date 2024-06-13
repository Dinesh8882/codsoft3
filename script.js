const toggle = () => {
    const menu = document.querySelector('.menu')
    const close_menu = document.querySelector('.close-menu img')
    const nav_list = document.querySelector('.nav-list ul')

    menu.addEventListener("click", () => {
        gsap.to(nav_list, {
            width: "70vw"
        })
    })

    close_menu.addEventListener("click", () => {
        gsap.to(nav_list, {
            width: "0vw"
        })
    })
};

const sticky = () => {
    let nav = document.querySelector('.hero .nav');
    window.addEventListener('scroll', (e) => {
        if (window.scrollY > 100) {
            nav.classList.add('dark')
            nav.classList.remove('light')

        }
        else{
            nav.classList.add('light')
            nav.classList.remove('dark')

        }
    })

}

const loadingAnimation = () => {
    let timelin = gsap.timeline();

    // Loading Animation Variables
    const heading_1 = document.querySelectorAll('.loading .load1 h1');
    let count = 0;
    let clearInterva;
    let loading = document.querySelector('.loading');
    let load1 = document.querySelector('.loading .load1');
    let load2 = document.querySelector('.loading .load2');

    // Hero Animtion Variables
    let logo = document.querySelector('.logo img');
    let logo_heading = document.querySelector('.logo h1');
    let menuIcon = document.querySelector('.menu img');

    let hero_heading = document.querySelector(".hero-content h1");
    hero_heading.innerHTML = '<span class="char" >' + hero_heading.innerHTML.split("").join('</span><span class="char">') + '</span>';
    let hero_pera = document.querySelector('.hero-content p');
    hero_pera.innerHTML = '<span class="char1" >' + hero_pera.innerHTML.split("").join('</span><span class="char1">') + '</span>';
    let hero_icon = document.querySelectorAll('.social-icon a');



    const heroAnimation = () => {
        timelin.to([load1, load2], {
            width: "0",
            duration: 1
        }, "h")

        timelin.to([heading_1[0], heading_1[1]], {
            opacity: 0,
            fontSize: "2vw"
        }, "h").from('.arrows', {
            opacity: 0,
            duration: 0.5,
            y: 100
        }).to(loading, {
            y: "-100%"
        }).from([logo, logo_heading, menuIcon], {
            y: 100,
            stagger: 0.08
        }).from(".char", {
            opacity: 0,
            stagger: 0.05,
        }).from(".char1", {
            opacity: 0,
            stagger: 0.01,
        }).from(hero_icon, {
            y: 100,
            stagger: 0.08,
        })
    }

    const counting = () => {
        if (count < 100) {
            count = count + 5
        }
        else {
            heroAnimation();
            clearInterval(clearInterva);
        }

        heading_1[1].innerHTML = count
        heading_1[0].innerHTML = count
    }
    clearInterva = setInterval(counting, 100);
};

const aboutAnimation = () => {
    let about_pera = document.querySelector('#about-content-right p');
    about_pera.innerHTML = '<span class="char3" >' + about_pera.innerHTML.split("").join('</span><span class="char3">') + '</span>';
    let progress_bar = document.querySelectorAll('.progress-bar .outer-bar')
    let about_btn = document.querySelectorAll('#about-content-right .btn')

    gsap.from(about_btn, {
        x: 100,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
            trigger: "#about-content-right",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 65%"
        }
    })
    gsap.from(progress_bar, {
        x: 100,
        opacity: 0,
        stagger: 0.05,
        scrollTrigger: {
            trigger: "#about-content-right",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 72%"
        }
    })
    gsap.from('.about .image ', {
        x: -100,
        // rotate: 300,
        opacity: 0,
        scrollTrigger: {
            trigger: "#about-content-right",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 78%"
        }
    })
    gsap.from('#about-content-right h1', {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#about-content-right",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 76%"
        }
    })
    gsap.from('.char3', {
        opacity: 0,
        stagger: 0.010,
        scrollTrigger: {
            trigger: "#about-content-right",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 75%"
        }
    })


    console.log(about_pera);
};

const services = () => {

    let servies_info = document.querySelectorAll('.servies-info .ser-info')

    gsap.from('.services .heading', {
        x: 10,
        opacity: 0,
        scrollTrigger: {
            trigger: ".services",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 85%"
        }
    })
    gsap.from(servies_info, {
        y: 100,
        opacity: 0,
        stagger: 0.08,
        scrollTrigger: {
            trigger: ".services",
            scroll: 'body',
            // markers: true,// Adds markers for easier debugging
            start: "center 85%"
        }
    })
};

const projectAnimation = () => {
    let imgBox = document.querySelectorAll('.pro1 a img');
    let videoBox = document.querySelectorAll('.pro1 #video_play')
    console.log(videoBox);
    imgBox.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            gsap.to(item, {
                opacity: 0,
                height: "91%",
                duration: 1
            })
        })

        item.addEventListener('mouseleave', () => {
            gsap.to(item, {
                opacity: 1,
                height: "90%",
                duration: 1
            })
        })

    })

    imgBox.forEach((img) => {
        img.addEventListener('mouseenter', () => {
            videoBox.forEach((vid) => {
                vid.play();
                gsap.to(vid, {
                    opacity: 1
                })
            })
        })

        img.addEventListener('mouseleave', () => {
            videoBox.forEach((vid) => {
                vid.pause();
                gsap.to(vid, {
                    opacity: 0
                })
            })
        })
    })

};









toggle();
sticky();

loadingAnimation();
aboutAnimation();
services();
projectAnimation()