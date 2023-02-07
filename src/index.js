import Navbar from './navbar'
import {home, removeHome} from './home'
import {contact, removeContact} from './contact'
import {dishes, removeDishes} from './dishes'

Navbar()
home()
const listLink = document.querySelectorAll('li')
console.log(listLink)
listLink.forEach(li=>li.onclick = () => {
    const activeLink = document.querySelector('.active')
    activeLink.classList.remove('active')
    li.classList.add('active')
    if(li.innerText === 'Home'){
        removeContact()
        removeDishes()
        home()
    }
    else if(li.innerText === 'Contact'){
        removeDishes()
        removeHome()
        contact()
    }
    else if(li.innerText === 'Dishes'){
        removeContact()
        removeHome()
        dishes()
    }
})

