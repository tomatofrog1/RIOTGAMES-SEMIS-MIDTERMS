const burgirBtn = document.querySelector(".burgerBtn");
const headerNav = document.querySelector(".hideMobile")
const closeBtn = document.querySelector(".appearMobile .burgerBtn")

burgirBtn.addEventListener("click", () =>{
    burgirBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
});

closeBtn.addEventListener("click", ()=>{
    burgirBtn.classList.remove("open");
    headerNav.classList.remove("open");
})

const header = document.querySelector('.header')

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY; 

    if (scrollY > 100) { 
        header.classList.add('scroll')
    } else if(scrollY < 100){
        header.classList.remove('scroll')
    }
});

//DROPDOWN
const navig = document.querySelectorAll('.navig')


for (let nav of navig) {
    nav.addEventListener('click', ()=>{
    nav.nextElementSibling.classList.toggle('show')

})
}

// drop category
const textLogo = document.querySelector('.textLogo')
const headerCat = document.querySelector('.header__categories')
const close = document.querySelector('.header__categories .burgerBtn')
const categLogo = document.querySelector('.categ_logo svg')
const backdrop = document.querySelector('.header__backdrop')

textLogo.addEventListener('click', ()=>{
    headerCat.classList.add('open')
    backdrop.classList.add('open')
})

close.addEventListener('click', ()=>{
    headerCat.classList.remove('open')
    backdrop.classList.remove('open')

})
categLogo.addEventListener('click', ()=>{
    headerCat.classList.remove('open')
    backdrop.classList.remove('open')
})
backdrop.addEventListener('click', ()=>{
    headerCat.classList.remove('open')
    backdrop.classList.remove('open')
})

// drop categories
const categ = document.querySelectorAll('.category')

for (let cat of categ) {
    cat.addEventListener('click', ()=>{
    cat.children[1].classList.toggle('show')
})
}






