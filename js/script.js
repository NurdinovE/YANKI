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

async function getStatus() {
    try {

    } catch (e) {
        console.log(e);
    }
    const res = await fetch(
        "http://127.0.0.1:8000/yanki/api/v1/cat_list"
    );
    const data = await res.json();
    function getCatUrl(){
        const appendClass = document.querySelector(".categories__items")
        const list = document.createDocumentFragment();
        data.map(function (item) {
            let catItem = document.createElement('div')
            catItem.classList.add("categories__item");
            let link = document.createElement('a');
            link.setAttribute("href", "#")
            let img = document.createElement('img');
            img.classList.add("categories__img");
            img.setAttribute('src', item.image)
            let catItemName = document.createElement('div')
            catItemName.classList.add("categories__item__name");
            catItemName.textContent = `${item.title}`
            return link.appendChild(img) +
                link.appendChild(catItemName) +
                catItem.appendChild(link) +
                list.appendChild(catItem)
        });

        appendClass.appendChild(list);

        $('.categories__items').slick({
            arrows: true,
            dots: true,
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
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    }

    getCatUrl();
}
getStatus();


function myFooterFunction() {
    document.getElementById("myFooterDropdown2").classList.toggle("show");
    document.querySelector("#footer__dropdown__img2").classList.toggle("dropdown__up")
}
const footerDrop = document.querySelector(".dropbtn")
// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
footerDrop.onclick = function(e){
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myFooterDropdown2");
        let dropImg = document.getElementById("footer__dropdown__img2")
        if (myDropdown.classList.contains('show') && dropImg.classList.contains("dropdown__up")) {
            myDropdown.classList.remove('show');
            dropImg.classList.remove("dropdown__up")


        }
    }
};

