'use strict';

const goods = [
    { title: 'Shirt', price: 150 },
    { title: 'Socks', price: 50 },
    { title: 'Jacket', price: 350 },
    { title: 'Shoes', price: 250 },
];



class GoodsList {

    constructor(goods) {
        this.goods = goods;
        this.sum = 0;
        this.renderGoodsList();
    }

    renderGoodsItem(title, price = 0) {
        this.sum += price;
        return `<div class="goods-item">
                    <img src="http://dummyimage.com/120" alt="" srcset="">
                    <h3>${title}</h3>
                    <p>$${price}</p>
                    <button type="button">Добавить</button>
                </div>`;
    }

    renderGoodsList() {
        const gl = document.querySelector('.goods-list');
        for (let good of this.goods) {
            gl.insertAdjacentHTML('beforeend',
                this.renderGoodsItem(good.title, good.price));
        }
    }

    /* Если посчитать просто сумму всех отрендереных товаров 
    то нет смысла вводить функцию */

}
const goodsRender = new GoodsList(goods);