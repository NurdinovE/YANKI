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
