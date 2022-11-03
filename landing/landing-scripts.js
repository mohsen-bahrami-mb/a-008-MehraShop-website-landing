const category = [
    "همه ی دسته بندی ها",
    "سوپرمارکت",
    "خوراکهای گیاهی",
    "هدیه و صنایع دستی",
    "مد و پوشاک", "ورزش و سفر",
    "کالای الکترونیک",
    "مادر و کودک",
    "خانه و آشپزخانه",
    "کتاب و لوازم التحریر",
    "سلامت و زیبایی",
]


//////////// navFixTop-start ////////////
category.forEach((catg) => {
    let newLi = document.createElement('li')
    newLi.innerHTML = `<a class="dropdown-item text-end" href="#">${catg}</a>`
    document.querySelector('#drop-nav-fix-top').appendChild(newLi)
})

document.querySelector('#drop-nav-fix-top').addEventListener('click', (e) => {
    let tittle = e.target.closest('.dropdown').getElementsByClassName('dropdown-toggle')[0];
    tittle.innerText = e.target.innerText;
})

//////////// navFixTop-end ////////////

