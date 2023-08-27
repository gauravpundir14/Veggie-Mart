let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'TOMATO',
        image : "https://www.shutterstock.com/shutterstock/photos/650684470/display_1500/stock-photo-tomato-isolated-on-white-background-with-clipping-path-full-depth-of-field-650684470.jpg",
        price: 120
    },
    {
        id: 2,
        name: 'GINGER',
        image: "https://www.eatingwell.com/thmb/3kciNkbDMbne5_idW3zspqsXf7U=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/gigner-peeling-hack-396e818a5c774258a7688a679f4436e3.jpg",
        price: 200
    },
    {
        id: 3,
        name: 'POTATO',
        image: 'https://static.toiimg.com/photo/92522114.cms',
        price: 20
    },
    {
        id: 4,
        name: 'CUCUMBER',
        image: 'https://images.pexels.com/photos/2329440/pexels-photo-2329440.jpeg?cs=srgb&dl=pexels-lo-2329440.jpg&fm=jpg',
        price: 20
    },
    {
        id: 5,
        name: 'CARROT',
        image: 'https://images.healthshots.com/healthshots/en/uploads/2023/04/03155814/carrots.jpg',
        price: 95
    },
    {
        id: 6,
        name: 'LEMON',
        image: 'https://media.istockphoto.com/id/466175634/photo/lemon-fruit-with-half-and-leaves-isolated-on-white.jpg?s=612x612&w=0&k=20&c=yRkrtlYtXd1O2EsPaxzOI1TSJOQ3kaf8XUzPe1ODoOo=',
        price: 75
    },
    {
        id: 7,
        name: 'CAPSICUM',
        image: 'https://e1.pxfuel.com/desktop-wallpaper/1023/1022/desktop-wallpaper-bell-pepper-capsicum-thumbnail.jpg',
        price: 65
    },
    {
        id: 8,
        name: 'BOTTLE GOURD',
        image: 'https://farmscart.com/file/2017/09/farmscart-bottlegourd-suman.webp',
        price: 35
    },
    {
        id: 8,
        name: 'PUMPKIN',
        image: 'https://t4.ftcdn.net/jpg/02/83/13/63/360_F_283136302_g7keyrnAqH391XRQHj18KmTH8DEOEUjk.jpg',
        price: 24
    }
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}