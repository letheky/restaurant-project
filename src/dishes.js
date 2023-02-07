export function dishes(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)
    
    const content = $('#content')
    //create bone for home page
    const dishes = document.createElement('div')

    dishes.classList.add('dishes-page')

    content.appendChild(dishes)

    //create hot dishes
    const hotDishes = document.createElement('div')
    const hotDishesTitle = document.createElement('h3')
    hotDishesTitle.textContent = "Weekly top sale dishes"
    hotDishes.appendChild(hotDishesTitle)
    hotDishes.classList.add('hot-dishes')
    content.appendChild(hotDishes)
    for(let i=0; i<5; i++){
        const hotDishesBlock = document.createElement('div')
        const hdbContent = document.createElement('div')
        const hdbTitle = document.createElement('h3')
        const hdbPrice = document.createElement('p')
        const image = document.createElement('img')

        hotDishesBlock.classList.add('hot-dishes-block')
        hdbContent.classList.add('hdb-content')

        if(i===0){
            hdbTitle.textContent = "Hamburger Size S"
            hdbPrice.textContent = "10$"
            image.src = '../src/imgs/dish1.svg'
            hdbContent.appendChild(hdbTitle)
            hdbContent.appendChild(hdbPrice)
            hotDishesBlock.appendChild(hdbContent)
            hotDishesBlock.appendChild(image)
            hotDishes.appendChild(hotDishesBlock)
        }
        if(i===1){
            hdbTitle.textContent = "Chinese noodle"
            hdbPrice.textContent = "20$"
            image.src = '../src/imgs/dish2.svg'
            hdbContent.appendChild(hdbTitle)
            hdbContent.appendChild(hdbPrice)
            hotDishesBlock.appendChild(hdbContent)
            hotDishesBlock.appendChild(image)
            hotDishes.appendChild(hotDishesBlock)
        }
        if(i===2){
            hdbTitle.textContent = "Hot dog king-serve"
            hdbPrice.textContent = "15$"
            image.src = '../src/imgs/dish3.svg'
            hdbContent.appendChild(hdbTitle)
            hdbContent.appendChild(hdbPrice)
            hotDishesBlock.appendChild(hdbContent)
            hotDishesBlock.appendChild(image)
            hotDishes.appendChild(hotDishesBlock)
        }
        if(i===3){
            hdbTitle.textContent = "Egg roll"
            hdbPrice.textContent = "10$"
            image.src = '../src/imgs/dish4.svg'
            hdbContent.appendChild(hdbTitle)
            hdbContent.appendChild(hdbPrice)
            hotDishesBlock.appendChild(hdbContent)
            hotDishesBlock.appendChild(image)
            hotDishes.appendChild(hotDishesBlock)
        }
        if(i===4){
            hdbTitle.textContent = "Ice scream 4-layer"
            hdbPrice.textContent = "5$"
            image.src = '../src/imgs/dish5.svg'
            hdbContent.appendChild(hdbTitle)
            hdbContent.appendChild(hdbPrice)
            hotDishesBlock.appendChild(hdbContent)
            hotDishesBlock.appendChild(image)
            hotDishes.appendChild(hotDishesBlock)
        }
    }
    //create all dishes
    const allDishes = document.createElement('div')
    const allDishesTitle = document.createElement('h3')
    allDishesTitle.textContent = "We serve every kind of food"
    allDishesTitle.setAttribute('style','bottom:-50px;position:absolute;')
    hotDishes.appendChild(allDishesTitle)
    allDishes.classList.add('all-dishes')
    content.appendChild(allDishes)
    for(let i=0; i<3; i++){
        for(let j=0; j<6; j++){

            const allDishesBlock = document.createElement('div')
            const adbContent = document.createElement('div')
            const adbTitle = document.createElement('h3')
            const adbDesc = document.createElement('p')
            const image = document.createElement('img')
    
            allDishesBlock.classList.add('all-dishes-block')
            adbContent.classList.add('adb-content')
    
            if(j===0){
                adbTitle.textContent = "Hamburger Size S"
                adbDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                image.src = '../src/imgs/dish1.svg'
                adbContent.appendChild(adbTitle)
                adbContent.appendChild(adbDesc)
                allDishesBlock.appendChild(adbContent)
                allDishesBlock.appendChild(image)
                allDishes.appendChild(allDishesBlock)
            }
            if(j===1){
                adbTitle.textContent = "Chinese noodle"
                adbDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                image.src = '../src/imgs/dish2.svg'
                adbContent.appendChild(adbTitle)
                adbContent.appendChild(adbDesc)
                allDishesBlock.appendChild(adbContent)
                allDishesBlock.appendChild(image)
                allDishes.appendChild(allDishesBlock)
            }
            if(j===2){
                adbTitle.textContent = "Hot dog king-serve"
                adbDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                image.src = '../src/imgs/dish3.svg'
                adbContent.appendChild(adbTitle)
                adbContent.appendChild(adbDesc)
                allDishesBlock.appendChild(adbContent)
                allDishesBlock.appendChild(image)
                allDishes.appendChild(allDishesBlock)
            }
            if(j===3){
                adbTitle.textContent = "Egg roll"
                adbDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                image.src = '../src/imgs/dish4.svg'
                adbContent.appendChild(adbTitle)
                adbContent.appendChild(adbDesc)
                allDishesBlock.appendChild(adbContent)
                allDishesBlock.appendChild(image)
                allDishes.appendChild(allDishesBlock)
            }
            if(j===4){
                adbTitle.textContent = "Ice scream 4-layer"
                adbDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                image.src = '../src/imgs/dish5.svg'
                adbContent.appendChild(adbTitle)
                adbContent.appendChild(adbDesc)
                allDishesBlock.appendChild(adbContent)
                allDishesBlock.appendChild(image)
                allDishes.appendChild(allDishesBlock)
            }
            if(j===5){
                adbTitle.textContent = "Strawberry flavor pizza"
                adbDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad"
                image.src = '../src/imgs/dish6.svg'
                adbContent.appendChild(adbTitle)
                adbContent.appendChild(adbDesc)
                allDishesBlock.appendChild(adbContent)
                allDishesBlock.appendChild(image)
                allDishes.appendChild(allDishesBlock)
            }
        }
    }
    const dishBlocks = $$('.all-dishes-block')
    dishBlocks.forEach(dishBlock => dishBlock.onmouseover = () => {
        const dishContent = dishBlock.querySelector('.adb-content')
        dishContent.setAttribute('style','visibility:visible;cursor:pointer;background-color: rgba(0,195,0, 0.6);color:#e2e8f0;opacity: 0;animation: scrollUp 10s ease-in-out;')
    })
    dishBlocks.forEach(dishBlock => dishBlock.onmouseout = () => {
        const dishContent = dishBlock.querySelector('.adb-content')
        dishContent.setAttribute('style','display:hidden;')
    })

    

    //create footer
    const footer = document.createElement('div')
    footer.classList.add('footer')
    content.appendChild(footer)

    const footerText = document.createElement('p')
    footerText.textContent = "Copyright 2023 Ⓒ by Le The Ky"
    footerText.setAttribute('style','text-align:center;')
    footer.appendChild(footerText)
}

export function removeDishes(){
    const $ = document.querySelector.bind(document)
    const $$ = document.querySelectorAll.bind(document)

    const content = $('#content')
    const h = $('.hot-dishes')
    const f = $('.footer')
    const a = $('.all-dishes')

    if(h)content.removeChild(h)
    if(a)content.removeChild(a)
    if(f)content.removeChild(f)

    console.log('remove dishes')
}