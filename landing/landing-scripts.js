const category = [
    { _id: 1, tittle: "همه ی دسته بندی ها", iconSrc: "../icons/i-fish.png" },
    { _id: 2, tittle: "سوپرمارکت", iconSrc: "../icons/i-hot-sale-(1).png" },
    { _id: 3, tittle: "خوراکهای گیاهی", iconSrc: "../icons/i-bell.png" },
    { _id: 4, tittle: "هدیه و صنایع دستی", iconSrc: "../icons/i-discount.png" },
    { _id: 5, tittle: "مد و پوشاک", iconSrc: "../icons/i-harvest.png" },
    { _id: 6, tittle: "ورزش و سفر", iconSrc: "../icons/i-vegetable.png" },
    { _id: 7, tittle: "کالای الکترونیک", iconSrc: "../icons/i-plastic-bottle.png" },
    { _id: 8, tittle: "مادر و کودک", iconSrc: "../icons/i-bread.png" },
    { _id: 9, tittle: "خانه و آشپزخانه", iconSrc: "../icons/i-boiled-egg.png" },
    { _id: 10, tittle: "کتاب و لوازم التحریر", iconSrc: "../icons/i-milk.png" },
    { _id: 11, tittle: "سلامت و زیبایی", iconSrc: "../icons/i-meat.png" }
]


//////////// navStickyTop-start ////////////
category.forEach((catg) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `<a class="dropdown-item text-end" href="#">${catg.tittle}</a>`
    document.querySelector('#catg-nav-fix-top').appendChild(newLi)
})

document.querySelector('#catg-nav-fix-top').addEventListener('click', (e) => {
    let tittle = e.target.closest('.dropdown').getElementsByClassName('dropdown-toggle')[0];
    tittle.innerText = e.target.innerText;
})

//////////// navStickyTop-end ////////////


//////////// sliderCategory-start ////////////
category.forEach((catg) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `
    <a class="list-group-item list-group-item-action lh-1" style="font-size: 0.8rem; height: 35px;" href="#">
    <img class="h-100" src=${catg.iconSrc} /> ${catg.tittle}
    </a>
    `
    document.querySelector('#catg-head-slct').appendChild(newLi)
})

addEventListener('load', () => {
    if (matchMedia("(max-width: 991.5px)").matches) {
        document.querySelector('#catg-nxt-slider').classList.toggle('show')
    }
})
//////////// sliderCategory-end ////////////


//////////// offer-start ////////////
const offerProducts = [
    {
        _id: 1,
        imgSrc: "../imgs/off-kaktos.png",
        nameP: "کاکتوس با گلدان سنگی",
        stars: 3,
        caption: "",
        price: 1200000,
        total: 5,
        sale: 4,
    },
    {
        _id: 2,
        imgSrc: "../imgs/off-rozh.png",
        nameP: "رژلب گیاهی",
        stars: 4,
        caption: "رژلبهای گیاهی کاملا ارگانیک از برند پاک سیما",
        price: 35000,
        total: 20,
        sale: 18,
    },
    {
        _id: 3,
        imgSrc: "../imgs/off-gol.png",
        nameP: "سبد گل طبیعی",
        stars: 5,
        caption: "یک سبد گل طبیعی به سلیقه شما به ارزش 2،000،000 میلیون با تخفیف ویژه فقط امروز",
        price: 1200000,
        total: 15,
        sale: 4,
    },
    {
        _id: 4,
        imgSrc: "../imgs/off-4payeh.png",
        nameP: "چهارپایه چوبی",
        stars: 3,
        caption: "چهارپایه چوبی با چوب گردو رنگ طبیعی خود چوب حفظ شده",
        price: 700000,
        total: 3,
        sale: 1,
    },
    {
        _id: 5,
        imgSrc: "../imgs/off-avocado.png",
        nameP: "آواکادو ارگانیک",
        stars: 3,
        caption: "آواکادو های رسیده و ارگانیک میوه سرای شیراز",
        price: 55000,
        total: 30,
        sale: 15,
    },
    {
        _id: 6,
        imgSrc: "../imgs/off-abnabat.png",
        nameP: "آب نبات بدون شکر",
        stars: 1,
        caption: "آب نبات بدون شکر، تهیه شده از عسل",
        price: 15000,
        total: 10,
        sale: 3,
    }
]

offerProducts.forEach((offProduct) => {
    let newOffPro = document.createElement('div');
    let rangeFullSale = document.createElement('div');
    let fillStars = document.createElement('span');
    let fillStarsArr = [];

    newOffPro.className = "col-6 col-sm-4 col-lg-2 p-3";
    rangeFullSale.className = "range-full-sale";
    fillStars.className = "msh-txt-dark-red";

    for (let i = 0; i < offProduct.stars; i++) {
        fillStarsArr.push('&starf;')
    }
    for (let i = 0; i < (5 - offProduct.stars); i++) {
        fillStarsArr.push('&star;')
    }

    fillStars.innerHTML = fillStarsArr.join("");
    rangeFullSale.style.width = (offProduct.sale * 100) / offProduct.total + "%"
    newOffPro.innerHTML = `
        <a class="d-flex flex-column align-items-center justify-content-between position-relative h-100 text-decoration-none fw-bold msh-txt-black msh-fs-0p7">
            <img class="position-absolute mt-1 w-25" src="../icons/i-save.png" alt="">
            <img class="mt-1 w-75" src="${offProduct.imgSrc}" alt="">
            <span class="mt-1">${offProduct.nameP}</span>
            <span class="mt-1 stars">
                ${fillStars.outerHTML}
            </span>
            <span class="mt-1 text-center">${offProduct.caption}</span>
            <span class="mt-1 msh-txt-dark-red">
                <span class="point-number">${offProduct.price}</span>
                <span>تومان</span>
            </span>
            <div class="mt-1 range-sale">
                ${rangeFullSale.outerHTML}
            </div>
            <div class="row justify-content-aroundmt-1 mt-1 w-100">
                <div class="col-6 text-end px-3 msh-fs-0p5"><span>فروش رفته: </span><span>${offProduct.sale}</span></div>
                <div class="col-6 text-start px-3 msh-fs-0p5"><span>مانده: </span><span>${offProduct.total - offProduct.sale}</span></div>
            </div>
        </a>
    `

    document.querySelector('#offer-cards').appendChild(newOffPro);
})
//////////// offer-end ////////////


//////////point number//////////
function pointNumber(valueNumber) {
    let value = valueNumber
    let refreshValue = value.split('.').join('').split('')
    let dotePlace = []
    let finalValue
    for (let i = 1; i < refreshValue.length; i++) {
        i % 3 == 0 ? dotePlace.push(i + dotePlace.length) : null;
    }
    for (let z = 0; z < dotePlace.length; z++) {
        refreshValue.splice(refreshValue.length - (dotePlace[z]), 0, `.`)
    }
    finalValue = refreshValue.join('')
    return finalValue || value
}

document.querySelectorAll('.point-number').forEach((numTag) => {
    numTag.innerHTML = pointNumber(numTag.innerHTML)
})
//////////point number-end//////////