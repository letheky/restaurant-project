export function home(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    
    const content = $('#content')
    //create bone for home page
    const banner = document.createElement('div')
    const dishes = document.createElement('div')
    const footer = document.createElement('div')

    banner.classList.add('banner')
    dishes.classList.add('dishes')
    footer.classList.add('footer')

    content.appendChild(banner)
    content.appendChild(dishes)
    content.appendChild(footer)

    //create banner
    const bannerFirstTitle = document.createElement('h1')
    banner.appendChild(bannerFirstTitle)
    bannerFirstTitle.setAttribute('style','text-align:center;text-transform:uppercase;font-size:30px;color:#4ade80;margin-top:20px;text-shadow:3px 3px 7px #4ade80')
    bannerFirstTitle.textContent = 'Eco food for new century'
    for(let i=0; i<3; i++){
        const bannerBlock = document.createElement('div')
        const bannerInfo = document.createElement('div')
        const bannerTitle = document.createElement('h3')
        const bannerDesc = document.createElement('p')
        const bannerImg = document.createElement('img')
        bannerBlock.classList.add('banner-block')
        if(i===0){
            bannerTitle.textContent = "We are appreciate the truth of customer!"
            bannerImg.src = '../src/imgs/banner1.svg'
            bannerDesc.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        else if(i===1){
            bannerTitle.textContent = "We are one of the best restaurant in the world!"
            bannerImg.src = '../src/imgs/banner2.svg'
            bannerDesc.textContent = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
        }
        if(i===2){
            bannerTitle.textContent = "We are here to serve you our best dishes!"
            bannerImg.src = '../src/imgs/banner3.svg'
            bannerDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        }
        banner.appendChild(bannerBlock)
        bannerBlock.appendChild(bannerImg)
        bannerBlock.appendChild(bannerInfo)
        bannerInfo.appendChild(bannerTitle)
        bannerInfo.appendChild(bannerDesc)
    }

    //create dishes
    const favoriteDishes = document.createElement('h1')
    banner.appendChild(favoriteDishes)
    favoriteDishes.setAttribute('style','text-align:center;text-transform:uppercase;font-size:30px;color:#ef4444;margin-top:20px;text-shadow:3px 3px 7px #ef4444')
    favoriteDishes.textContent = 'Favorite dishes of the weeks'
    for(let i=0; i<6; i++){
        const dishBlock = document.createElement('div')
        const dishInfo = document.createElement('div')
        const dishTitle = document.createElement('h3')
        const dishDesc = document.createElement('p')
        const dishImg = document.createElement('img')
        dishBlock.classList.add('dish-block')
        dishInfo.classList.add('dish-info')
        if(i===0){
            dishTitle.textContent = "Hamburger Size S"
            dishImg.src = '../src/imgs/dish1.svg'
            dishDesc.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
        }
        else if(i===1){
            dishTitle.textContent = "Chinese noodle"
            dishImg.src = '../src/imgs/dish2.svg'
            dishDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temud."
        }
        if(i===2){
            dishTitle.textContent = "Hot dog king-serve"
            dishImg.src = '../src/imgs/dish3.svg'
            dishDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod temud."
        }
        if(i===3){
            dishTitle.textContent = "Egg roll"
            dishImg.src = '../src/imgs/dish4.svg'
            dishDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."
        }
        if(i===4){
            dishTitle.textContent = "Ice scream 4-layer"
            dishImg.src = '../src/imgs/dish5.svg'
            dishDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."
        }
        if(i===5){
            dishTitle.textContent = "Strawberry Flavor Pizza"
            dishImg.src = '../src/imgs/dish6.svg'
            dishDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ."
        }
        dishes.appendChild(dishBlock)
        dishBlock.appendChild(dishImg)
        dishBlock.appendChild(dishInfo)
        dishInfo.appendChild(dishTitle)
        dishInfo.appendChild(dishDesc)
    }

    //create footer
    const footerText = document.createElement('p')
    footerText.textContent = "Copyright 2023 Ⓒ by Le The Ky"
    footerText.setAttribute('style','text-align:center;')
    footer.appendChild(footerText)
}

export function removeHome(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const content = $('#content')
    const banner = $('.banner')
    const dishes = $('.dishes')
    const footer = $('.footer')

    if(banner)content.removeChild(banner)
    if(dishes)content.removeChild(dishes)
    if(footer)content.removeChild(footer)

    console.log('remove home')
}