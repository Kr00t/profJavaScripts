'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];

const gl = document.querySelector('.goods-list');

const renderGoodsItem = (title, price = 0) => {
    return `<div class="goods-item"><h3>${title}</h3><p>${price}</p></div>`;
};

const renderGoodsList = (list) => {
    for (let good of list) {
        gl.innerHTML += renderGoodsItem(good.title, good.price);
    }
}

renderGoodsList(goods);