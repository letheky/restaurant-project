

export default function navbar(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const content = $('#content')
    const navbar = document.createElement('div')
    const logo = document.createElement('a')
    const logoImg = document.createElement('img')
    const navbarUl = document.createElement('ul')
    const homeLi = document.createElement('li')
    const contactLi = document.createElement('li')
    const dishesLi = document.createElement('li')
    const homeLink = document.createElement('a')
    const contactLink = document.createElement('a')
    const dishesLink = document.createElement('a')

    navbar.classList.add('navbar')
    
    content.appendChild(navbar)
    navbar.appendChild(logo)
    logo.appendChild(logoImg)
    navbar.appendChild(navbarUl)
    navbarUl.appendChild(homeLi)
    navbarUl.appendChild(contactLi)
    navbarUl.appendChild(dishesLi)
    homeLi.appendChild(homeLink)
    contactLi.appendChild(contactLink)
    dishesLi.appendChild(dishesLink)
    
    homeLink.textContent = "Home"
    contactLink.textContent = "Contact"
    dishesLink.textContent = "Dishes"
    
    logoImg.src ='../src/imgs/logo.svg'

    homeLi.classList.add('active')
    const listLink = $$('li')
    listLink.forEach(li=>li.onclick = () => {
        const activeLink = $('.active')
        activeLink.classList.remove('active')
        li.classList.add('active')
    })
}
