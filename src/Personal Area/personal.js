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


    // $('ul.catalog_tabs').on('click', 'li:not(catalog_tab_active)', function() {
    //     $(this)
    //         .addClass('.catalog_tab_active')
    //         .siblings()
    //         .removeClass('.catalog_tab_active')
    //         .closest('.container')
    //         .find('.catalog__content')
    //         .removeClass('.catalog__content_active')
    //         .eq($(this).index())
    //         .addClass('catalog__content_active');
    // })
function openCity(evt, cityName) {
    let tabContent = document.querySelectorAll(".tabContent");
    for (let i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }
    let tabLinks = document.querySelectorAll(".tabLinks");
    for (let i = 0; i < tabLinks.length; i++) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

function myDropFunction() {
    document.getElementById("myDropdownHistory").classList.toggle("show");
    document.querySelector("#dropdownImgBrown").classList.toggle("dropdown__up")
}
function myDropFunction2() {
    document.getElementById("myDropdownHistory2").classList.toggle("show");
    document.querySelector("#dropdownImgBrown2").classList.toggle("dropdown__up")
}
function myDropFunction3() {
    document.getElementById("myDropdownHistory3").classList.toggle("show");
    document.querySelector("#dropdownImgBrown3").classList.toggle("dropdown__up")
}
function myDropFunction4() {
    document.getElementById("myDropdownHistory4").classList.toggle("show");
    document.querySelector("#dropdownImgBrown4").classList.toggle("dropdown__up")
}





// Закрыть раскрывающийся список, если пользователь щелкнет за его пределами.
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
        let myDropdown = document.getElementById("myDropdown");
        let dropImg = document.getElementById("dropdown__img")
        let dropImgBrown = document.getElementById("dropdownImgBrown")
        let dropImgBrown2 = document.getElementById("dropdownImgBrown2")
        let dropImgBrown3 = document.getElementById("dropdownImgBrown3")
        let dropImgBrown4 = document.getElementById("dropdownImgBrown4")
        if (myDropdown.classList.contains('show') &&
            dropImg.classList.contains("dropdown__up")
        ) {
            myDropdown.classList.remove('show');
            dropImg.classList.remove("dropdown__up")

        } else if(dropImgBrown.classList.contains("dropdown__up")){
            dropImgBrown.classList.remove("dropdown__up")
        }else if(dropImgBrown2.classList.contains("dropdown__up")){
            dropImgBrown2.classList.remove("dropdown__up")
        }else if(dropImgBrown3.classList.contains("dropdown__up")){
            dropImgBrown3.classList.remove("dropdown__up")
        }else if(dropImgBrown4.classList.contains("dropdown__up")){
            dropImgBrown4.classList.remove("dropdown__up")
        }
    }
};
