let hamb = document.querySelector("#hamb");
let popup = document.querySelector("#popup");
let menu = document.querySelector(".secondPart");

hamb.addEventListener("click", hambHundler);

function hambHundler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    menu.style.display = "flex";
    renderPopup()
}
function renderPopup() {
    popup.appendChild(menu)
}


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
    document.querySelector("#dropdown__img").classList.toggle("dropdown__up")
}

// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown");
        let dropImg = document.getElementById("dropdown__img")
        if (myDropdown.classList.contains('show') && dropImg.classList.contains("dropdown__up")) {
            myDropdown.classList.remove('show');
            dropImg.classList.remove("dropdown__up")


        }
    }
};
function myFunction2() {
    document.getElementById("myDropdown2").classList.toggle("show");
    document.querySelector("#dropdown__img2").classList.toggle("dropdown__up")
}

// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown2");
        let dropImg = document.getElementById("dropdown__img2")
        if (myDropdown.classList.contains('show') && dropImg.classList.contains("dropdown__up")) {
            myDropdown.classList.remove('show');
            dropImg.classList.remove("dropdown__up")


        }
    }
};
$('.categories__items').slick({
    arrows: false,
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],

});
let catUrl = ""
catUrl.forEach((item) => {
    function getCatUrl(){
        let name = document.querySelector(".categories__item__name")
        let img = document.querySelector(".categories__img")
        return name.innerHTML = (item.name),
                img.setAttribute("src",item.image)


    }getCatUrl()
})




function myFooterFunction() {
    document.getElementById("myFooterDropdown2").classList.toggle("show");
    document.querySelector("#footer__dropdown__img2").classList.toggle("dropdown__up")
}

// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(e){
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myFooterDropdown2");
        let dropImg = document.getElementById("footer__dropdown__img2")
        if (myDropdown.classList.contains('show') && dropImg.classList.contains("dropdown__up")) {
            myDropdown.classList.remove('show');
            dropImg.classList.remove("dropdown__up")


        }
    }
};

