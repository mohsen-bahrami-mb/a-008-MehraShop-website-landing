const category = [
    { tittle: "همه ی دسته بندی ها", iconSrc: "../icons/i-fish.png" },
    { tittle: "سوپرمارکت", iconSrc: "../icons/i-hot-sale-(1).png" },
    { tittle: "خوراکهای گیاهی", iconSrc: "../icons/i-bell.png" },
    { tittle: "هدیه و صنایع دستی", iconSrc: "../icons/i-discount.png" },
    { tittle: "مد و پوشاک", iconSrc: "../icons/i-harvest.png" },
    { tittle: "ورزش و سفر", iconSrc: "../icons/i-vegetable.png" },
    { tittle: "کالای الکترونیک", iconSrc: "../icons/i-plastic-bottle.png" },
    { tittle: "مادر و کودک", iconSrc: "../icons/i-bread.png" },
    { tittle: "خانه و آشپزخانه", iconSrc: "../icons/i-boiled-egg.png" },
    { tittle: "کتاب و لوازم التحریر", iconSrc: "../icons/i-milk.png" },
    { tittle: "سلامت و زیبایی", iconSrc: "../icons/i-meat.png" }
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
    if (matchMedia("(max-width: 991.5px)").matches){
        console.log(innerWidth)
        document.querySelector('#catg-nxt-slider').classList.toggle('show')
    }
})
//////////// sliderCategory-end ////////////