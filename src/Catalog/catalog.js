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

async function catContent() {
    try {

    } catch (e) {
        console.log(e);
    }
    const res = await fetch(
        "http://127.0.0.1:8000/yanki/api/v1/cat_list"
    );
    const data = await res.json();
    const allCatNames = () => {
        const appendCatClass = document.querySelector(".catForm")
        const catList = document.createDocumentFragment();
        data.map(function (i) {
            let catEl = document.createElement('a');
            catEl.setAttribute("href", "#")
            catEl.classList.add("catFormLink"),
            catEl.setAttribute("id", i.id)
            catEl.setAttribute("onClick", `brandFunc(${i.id})`)
            catEl.textContent = `${i.title}`
            return catList.appendChild(catEl)

        })
        appendCatClass.appendChild(catList)
    };allCatNames()
}catContent()

//
let brandId
function brandFunc(id){
    brandId = id
    catBody(brandId)
}
async function catBody(brId=0) {
    let url = "http://127.0.0.1:8000/yanki/api/v1/pro_list/"
    if (brId!==0){
        url = `http://127.0.0.1:8000/yanki/api/v1/pro_list/${brId}`
    }
    console.log(url)
    const res = await fetch(
        url
    );
    const data = await res.json();
    console.log(data)
    const getCatBody = () => {
        const appendCatContent = document.querySelector(".catBodyItems")
        const catFragment = document.createDocumentFragment();
        data.map(function (it) {
            let catItem = document.createElement('div')
            catItem.classList.add("catBodyItem");
            catItem.setAttribute("id", it.brand)

            let link = document.createElement('a');
            link.setAttribute("href", "#")
            link.classList.add("catItemLink");

            let wish = document.createElement("div")
            wish.classList.add("wish");

            let wishLink = document.createElement('a');
            wishLink.setAttribute("href", "#")
            wishLink.classList.add(`wishLink`)

            let wishImg = document.createElement('img');
            wishImg.setAttribute('src', "../../icons/wish.png")
            wishImg.classList.add("wishImg");

            let img = document.createElement('img');
            img.setAttribute('src', it.image)

            let catItemName = document.createElement('div')
            catItemName.classList.add("itemName");
            catItemName.textContent = `${it.title}`

            let itemPrice = document.createElement('div')
            itemPrice.classList.add("itemPrice");
            itemPrice.textContent = `${it.price} $`

            let itemSizes = document.createElement('div')
            itemSizes.classList.add("itemSizes");
            itemSizes.textContent = `${it.size}`

            let itemColor = document.createElement('div')
            itemColor.classList.add("itemColor");

            const colorFragment = document.createDocumentFragment();

            let colors = it.color.map(function (itColor) {
                let circle = document.createElement('span')
                circle.classList.add("circle");
                circle.setAttribute('style', `background: ${itColor}`)
                colorFragment.appendChild(circle)
            })
            return wishLink.appendChild(wishImg) +
                wish.appendChild(wishLink) +
                catItem.appendChild(wish) +
                link.appendChild(img) +
                itemColor.appendChild(colorFragment) +
                link.appendChild(catItemName) +
                link.appendChild(catItemName) +
                link.appendChild(itemPrice) +
                link.appendChild(itemSizes) +
                link.appendChild(itemColor) +
                catItem.appendChild(link) +
                catFragment.appendChild(catItem)
        })
        appendCatContent.appendChild(catFragment);
    };getCatBody()
}catBody()

// document.querySelector(".catFormLink").addEventListener("click",brandFunc)
